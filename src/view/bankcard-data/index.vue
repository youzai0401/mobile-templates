<template>
    <div class="bankcard-data">
        <div class="data-cell">
            <span class="data-cell-label">
                <span class="cell-required">*</span>持卡人姓名
            </span>
            <input class="data-cell-input" type="text" :disabled="isComplete" placeholder="请输入持卡人姓名" v-model="formData.name">
        </div>
        <div class="data-cell">
            <span class="data-cell-label">
            <span class="cell-required">*</span>持卡人身份证号
            </span>
            <input class="data-cell-input" type="text" :disabled="isComplete" placeholder="请输入持卡人身份证号" v-model="formData.identityId">
        </div>
        <div class="data-cell">
            <span class="data-cell-label">
            <span class="cell-required">*</span>开户银行和地址
            </span>
            <input class="data-cell-input" type="text" :disabled="isComplete" placeholder="请输入开户银行和地址" v-model="formData.bankAddr">
        </div>
        <div class="data-cell">
            <span class="data-cell-label">
            <span class="cell-required">*</span>收款账号
            </span>
            <input class="data-cell-input" type="text" :disabled="isComplete" placeholder="请输入收款账号" v-model="formData.account">
        </div>
        <div class="button-container-back-next">
            <mt-button type="danger" class="button-back" @click="handleBack">上一步</mt-button>
            <mt-button type="primary" class="button-next" @click="handleNext">保存</mt-button>
        </div>
    </div>
</template>
<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>



