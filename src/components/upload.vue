<template>
    <div style="display: flex;flex-direction: column; align-items: center;gap: 30px;justify-items: center;width: 100%;">

        <t-upload style="width: 90%;" v-model="files" placeholder="支持批量上传图片文件" theme="image-flow" accept="image/*"
            multiple :request-method="requestMethod" :auto-upload="false" :show-image-file-name="showImageFileName"
            :max="8" :abridge-name="[6, 6]" :upload-button="showUploadButton ? undefined : null"
            :cancel-upload-button="showUploadButton ? { theme: 'default', content: '取消上传' } : null">
        </t-upload>


        <t-card style="width: 90%;" title="上传结果（点击链接复制）" header-bordered>
            <div style="display: flex;flex-direction: column;gap: 1px;align-items: center;justify-items: center;flex-wrap: wrap;
   ">
                <t-button @click="copyToClipboard(file.url)" v-for="(file, index) in files" :key="index"
                    style="width: 100%;" theme="default" variant="text">
                    <t-link> {{ file.url }} </t-link> <!-- 显示文件名 -->
                </t-button>


                <!-- 如果 files 数组为空，显示 "暂无结果" -->
                <div v-if="files.length === 0" style="width: 100%;text-align: center;" variant="text">
                    暂无结果
                </div>

            </div>

        </t-card>

    </div>



</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { MessagePlugin } from 'tdesign-vue-next';

const showImageFileName = ref(true);
const showUploadButton = ref(true);
const files = ref([
]);
const requestMethod = async (file) => {
    console.log(file);
    const formData = new FormData();
    formData.append('file', file[0].raw);

    try {
        const response = await axios.post('https://bbs.api.hoilai.com/aupload/upbed', formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // 设置请求头
            },
        });
        console.log(response);
        // 返回上传结果
        return {
            status: 'success',
            response: {
                url: response.data.fileUrl,

            }, // 假设后端返回的数据包含上传结果
        };
    } catch (error) {
        // 处理错误
        return {
            status: 'fail',
            error: error.message,
        };
    }
    console.log(files);
};

onMounted(() => {
    const element = document.querySelector('.t-upload__flow.t-upload__flow-image-flow');
    element.style.width = '100%';

    const element2 = document.querySelector('.t-upload__flow');
    console.log(element2);
    element2.style.maxWidth = "none";
    element2.style.minWidth = "none";
    element2.style.width = '100%';
});

// 复制到剪贴板的方法
const copyToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        MessagePlugin.success('复制成功: ' + text);
    } catch (err) {
        console.error('复制失败: ', err);
        MessagePlugin.error('复制失败，请手动复制');
    }
};
</script>

<style>
.static-image-list {
    .t-upload__flow-op {
        display: none;
    }
}
</style>