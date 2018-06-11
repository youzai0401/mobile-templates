<template>
    <div class="debt-data">
        <template v-for="(item,index) in loanList">
            <div class="loan-list-container">
                <p>借贷期限：{{item.periodName}}</p>
                <p>借贷金额: {{item.value}}</p>
                <p>借贷目的: {{item.purpose}}</p>
                <p style="color: #2DBFFF">借贷状态: {{formatterStatus(item.status)}}</p>
            </div>
        </template>
        <div class="button-container-back-next">
            <mt-button type="danger" class="loan-list-back" @click="handleBack">返回</mt-button>
        </div>
    </div>
</template>
<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>



