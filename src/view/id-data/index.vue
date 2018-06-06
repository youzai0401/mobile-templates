routes.js<template>
    <div class="loan">
        个人身份信息页面
        <!--<input accept="image/*" type="file" id="upload" @click="upload">-->
        <input  name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="upload"/>
        {{params}}
    </div>
</template>
<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

