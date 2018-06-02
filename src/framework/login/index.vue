<template>
    <div class="loan">
        login
        <mt-field label="账号" state="success" placeholder="请输入用户名" v-model="formData.username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="formData.password"></mt-field>
        <mt-button type="primary" @click.native="handleLogin">登录</mt-button>
    </div>
</template>
<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

