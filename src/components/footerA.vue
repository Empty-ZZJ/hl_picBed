<template>
    <div class="container">
        <section>
            <p>Copyright © 2022 - {{ currentYear }} HOILAI. All Rights Reserved.</p>
            <p>花濑 版权所有 | <t-link style="color: unset;" href="https://agt.hoilai.com">花濑用户服务协议</t-link></p>

        </section>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const currentYear = ref(new Date().getFullYear());
</script>
<style>
section {
    margin: 25px auto;
    margin-left: 35px;

    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    color: #8797a1;
    text-align: left;
}

.container {
    margin-top: 100px;
    background-color: #f2f2f2;
    width: 100%;
    color: grey;
    height: auto;
}
</style>