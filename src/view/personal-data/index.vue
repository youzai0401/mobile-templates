routes.js<template>
    <div class="loan">
        个人资料页面
        <router-link to="/id-data">身份信息</router-link>
        <router-link to="/information-data">资料信息</router-link>
        <router-link to="/bankCard-data">收款银行卡</router-link>
        <router-link to="/contacts-data">联系人信息</router-link>
        <mt-button type="primary" @click.native="handleLogout">退出</mt-button>
    </div>
</template>
<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

