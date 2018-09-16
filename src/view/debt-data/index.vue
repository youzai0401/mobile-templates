<template>
    <div class="debt-data">
        <template v-for="(item,index) in formDataOne">
            <div class="debt-card-container">
                <div class="data-cell">
                    <p class="data-cell-add" v-show="formDataOne.length === (index+1)" @click="addFormDataOne">新增</p>
                    <p class="data-cell-delete" v-show="formDataOne.length > 1" @click="deleteFormDataOne(index)">
                        删除</p>
                </div>
                <div class="data-cell">
                    <span class="data-cell-label">信用卡张数</span>
                    <input class="data-cell-input" type="text" v-model="item.name">
                </div>
                <div class="data-cell">
                    <span class="data-cell-label">信用卡总额度</span>
                    <input class="data-cell-input" type="text" v-model="item.value">
                </div>
                <div class="data-cell">
                    <span class="data-cell-label">已使用额度</span>
                    <input class="data-cell-input" type="text" v-model="item.useValue">
                </div>
            </div>
        </template>
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
        <template v-for="(item,index) in formDataTwo">
            <div class="other-loan-container">
                <div class="data-cell">
                    <p class="data-cell-add" v-show="formDataTwo.length === (index+1)" @click="addFormDataTwo">新增</p>
                    <p class="data-cell-delete" v-show="formDataTwo.length > 1" @click="deleteFormDataTwo(index)">
                        删除</p>
                </div>
                <div class="data-cell">
                    <span class="data-cell-label">私贷零用贷家数</span>
                    <input class="data-cell-input" type="text" v-model="item.name">
                </div>
                <div class="data-cell">
                    <span class="data-cell-label">每家公司名称</span>
                    <input class="data-cell-input" type="text" v-model="item.value">
                </div>
            </div>
        </template>

        <div class="button-container-back-next">
            <mt-button type="danger" class="button-back" @click="handleBack">上一步</mt-button>
            <mt-button type="primary" class="button-next" @click="handleNext">保存</mt-button>
        </div>
    </div>
</template>
<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>



