<template>
    <div class="loan">
        loan,默认借贷首页
        <mt-button type="primary" @click.native="handleLoanSuccess">立即借贷(成功跳转到借贷列表页面)</mt-button>
        <p>123</p>
        <mt-button type="primary" @click.native="handleLoanFailed">立即借贷(数据不全，跳转到补全信息页面)</mt-button>
    </div>
</template>
<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

