<template>
    <div class="loan">
        loan,默认借贷首页
        <mt-button type="primary" @click.native="handleLoanSuccess">立即借贷(成功,按钮变为审批中的状态，页面展示借贷信息)</mt-button>
        <p>123</p>
        <mt-button type="primary" @click.native="handleLoanFailed">立即借贷(数据不全，跳转到我的资料页面(补全信息页面))</mt-button>
    </div>
</template>
<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

