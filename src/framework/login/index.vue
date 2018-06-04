<template>
    <div class="login">
        <mt-field label="账号" :state="rulesState.username" placeholder="请输入账户" v-model="formData.username"></mt-field>
        <mt-field label="密码" :state="rulesState.password" placeholder="请输入密码" type="password" v-model="formData.password"></mt-field>
        <mt-button type="primary" class="login-button" @click.native="handleLogin">登 录</mt-button>
    </div>
</template>
<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

