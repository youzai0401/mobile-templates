<template>
    <div class="debt-data">
        <div class="debt-card-container">
            <div class="data-cell">
                <p class="data-cell-add">新增</p>
            </div>
            <div class="data-cell">
                <span class="data-cell-label">信用卡（银行卡）</span>
                <input class="data-cell-input" type="text" v-model="name">
            </div>
            <div class="data-cell">
                <span class="data-cell-label">授信额度</span>
                <input class="data-cell-input" type="text" v-model="name">
            </div>
            <div class="data-cell">
                <span class="data-cell-label">已使用额度</span>
                <input class="data-cell-input" type="text" v-model="name">
            </div>
        </div>
        <!--<div class="loan-container">-->
            <!--<div class="data-cell">-->
                <!--<p class="data-cell-add">新增</p>-->
            <!--</div>-->
            <!--<div class="data-cell">-->
                <!--<span class="data-cell-label">零用贷名称</span>-->
                <!--<input class="data-cell-input" type="text" v-model="name">-->
            <!--</div>-->
            <!--<div class="data-cell">-->
                <!--<span class="data-cell-label">零用贷金额</span>-->
                <!--<input class="data-cell-input" type="text" v-model="name">-->
            <!--</div>-->
        <!--</div>-->
        <div class="other-loan-container">
            <div class="data-cell">
                <p class="data-cell-add">新增</p>
            </div>
            <div class="data-cell">
                <span class="data-cell-label">其他贷款名称</span>
                <input class="data-cell-input" type="text" v-model="name">
            </div>
            <div class="data-cell">
                <span class="data-cell-label">其他贷款金额</span>
                <input class="data-cell-input" type="text" v-model="name">
            </div>
        </div>
        <div class="button-container-back-next">
            <mt-button type="danger" class="button-back" @click="handleBack">上一步</mt-button>
            <mt-button type="primary" class="button-next" @click="handleNext">保存</mt-button>
        </div>
    </div>
</template>
<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>



