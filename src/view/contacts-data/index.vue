routes.js
<template>
    <div class="contacts-data">
        <div class="contacts-container">
            <div class="data-cell">
            <span class="data-cell-label">关系
            <span class="cell-required">*</span>
            </span>
                <input class="data-cell-input" type="text" v-model="formData.relation">
                <span class="mint-field-state is-success">
                <i class="mintui mintui-field-success"></i>
            </span>
            </div>
            <div class="data-cell">
            <span class="data-cell-label">姓名
            <span class="cell-required">*</span>
            </span>
                <input class="data-cell-input" type="text" v-model="formData.name">
                <span class="mint-field-state is-success">
                <i class="mintui mintui-field-success"></i>
            </span>
            </div>
            <div class="data-cell">
            <span class="data-cell-label">联系电话
            <span class="cell-required">*</span>
            </span>
                <input class="data-cell-input" type="text" v-model="formData.phoneNum">
                <span class="mint-field-state is-success">
                <i class="mintui mintui-field-success"></i>
            </span>
            </div>
            <div class="data-cell">
            <span class="data-cell-label">工作单位
            <span class="cell-required">*</span>
            </span>
                <input class="data-cell-input" type="text" v-model="formData.company">
                <span class="mint-field-state is-success">
                <i class="mintui mintui-field-success"></i>
            </span>
            </div>
        </div>
        <div class="contacts-container">
            <div class="data-cell">
            <span class="data-cell-label">关系
            <span class="cell-required">*</span>
            </span>
                <input class="data-cell-input" type="text" v-model="formData.relation">
                <span class="mint-field-state is-success">
                <i class="mintui mintui-field-success"></i>
            </span>
            </div>
            <div class="data-cell">
            <span class="data-cell-label">姓名
            <span class="cell-required">*</span>
            </span>
                <input class="data-cell-input" type="text" v-model="formData.name">
                <span class="mint-field-state is-success">
                <i class="mintui mintui-field-success"></i>
            </span>
            </div>
            <div class="data-cell">
            <span class="data-cell-label">联系电话
            <span class="cell-required">*</span>
            </span>
                <input class="data-cell-input" type="text" v-model="formData.phoneNum">
                <span class="mint-field-state is-success">
                <i class="mintui mintui-field-success"></i>
            </span>
            </div>
            <div class="data-cell">
            <span class="data-cell-label">工作单位
            <span class="cell-required">*</span>
            </span>
                <input class="data-cell-input" type="text" v-model="formData.company">
                <span class="mint-field-state is-success">
                <i class="mintui mintui-field-success"></i>
            </span>
            </div>
        </div>
        <div class="contacts-container">
            <div class="data-cell">
            <span class="data-cell-label">关系
            </span>
                <input class="data-cell-input" type="text" v-model="formData.relation">
            </div>
            <div class="data-cell">
            <span class="data-cell-label">姓名
            </span>
                <input class="data-cell-input" type="text" v-model="formData.name">
            </div>
            <div class="data-cell">
            <span class="data-cell-label">联系电话
            </span>
                <input class="data-cell-input" type="text" v-model="formData.phoneNum">
            </div>
            <div class="data-cell">
            <span class="data-cell-label">工作单位
            </span>
                <input class="data-cell-input" type="text" v-model="formData.company">
            </div>
        </div>
        <div class="contacts-container">
            <div class="data-cell">
            <span class="data-cell-label">关系
            </span>
                <input class="data-cell-input" type="text" v-model="formData.relation">
            </div>
            <div class="data-cell">
            <span class="data-cell-label">姓名
            </span>
                <input class="data-cell-input" type="text" v-model="formData.name">
            </div>
            <div class="data-cell">
            <span class="data-cell-label">联系电话
            </span>
                <input class="data-cell-input" type="text" v-model="formData.phoneNum">
            </div>
            <div class="data-cell">
            <span class="data-cell-label">工作单位
            </span>
                <input class="data-cell-input" type="text" v-model="formData.company">
            </div>
        </div>
        <div class="button-container-back-next">
            <mt-button type="danger" class="button-back" @click="handleBack">上一步</mt-button>
            <mt-button type="primary" class="button-next" @click="handleNext">下一步</mt-button>
        </div>
    </div>
</template>
<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

