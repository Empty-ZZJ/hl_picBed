<template>
    <t-space direction="vertical" style="width: 95%;align-items: center;">
        <t-collapse :default-value="[1]" @change="handlePanelChange" style="width: 100%;padding: unset;margin: 0px;">
            <t-collapse-panel destroy-on-collapse header="花濑图床是做什么的？">
                你可以将图片上传到花濑图床，然后通过链接分享给其他人，也可以直接通过链接下载图片。得到的链接可以直接嵌入到网页中，也可以通过复制链接的方式下载图片。
            </t-collapse-panel>
            <t-collapse-panel destroy-on-collapse header="我所上传的文件是安全的吗">
                花濑图床存储服务器私有化，不存储任何用户信息，图片仅存储在服务器上，不会被上传到任何第三方服务器。因此，您的图片是安全的。
            </t-collapse-panel>
            <t-collapse-panel destroy-on-collapse header="我可以免费使用吗？">
                花濑图床是免费的，您可以免费使用。但如果您想使用花濑图床提供的更多功能，例如：批量上传、自定义域名、自定义存储空间等，您需要购买花濑图床的会员服务。
            </t-collapse-panel>
            <t-collapse-panel destroy-on-collapse header="图片的下载速度是否有限制？">
                花濑图床服务器限制了单个文件的最大下载速度为 1 mb/s，如果您需要更高的下载速度，您需要购买花濑图床的会员服务。
            </t-collapse-panel>
            <t-collapse-panel destroy-on-collapse header="我最大可以上传多少张图片？">
                花濑图床不对上传的图片数量做限制。
            </t-collapse-panel>
            <t-collapse-panel destroy-on-collapse header="为什么会上传失败？">
                请先检查上传文件是否为图片，且后缀为：jpg、jpeg、png、webp、gif。暂不支持其他格式的图片。若仍然上传失败，则可能是服务器异常，请稍后再试。
            </t-collapse-panel>

        </t-collapse>
    </t-space>
</template>
<script setup>
import { ref } from 'vue';

const currentItem = ref([1]);

const handlePanelChange = (val) => {
    currentItem.value = val;
};

</script>
<style>
.accordion-demo {
    background-color: #f9f9f9;
}

.button-area {
    margin-top: 20px;
    display: flex;
    align-items: center;
}
</style>