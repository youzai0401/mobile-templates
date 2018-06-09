<template>
    <div class="loan">
        <div class="data-cell">
            <span class="data-cell-label">
            <span class="cell-required">*</span>借款手机号
            </span>
            <input class="data-cell-input" type="text" placeholder="请输入借款手机号" v-model="formData.phoneNum">
        </div>
        <div class="data-cell">
            <span class="data-cell-label">
            <span class="cell-required">*</span>户籍地址
            </span>
            <input class="data-cell-input" type="text" placeholder="请输入户籍地址" v-model="formData.permanentAddr">
        </div>
        <div class="data-cell">
            <span class="data-cell-label">
            <span class="cell-required">*</span>住宅状况
            </span>
            <input class="data-cell-input" type="text" placeholder="请输入住宅状况" v-model="formData.houseType">
        </div>
        <div class="data-cell">
            <span class="data-cell-label">
            <span class="cell-required">*</span>现住地址
            </span>
            <input class="data-cell-input" type="text" placeholder="请输入现住地址" v-model="formData.houseAddr">
        </div>
        <div class="data-cell">
            <span class="data-cell-label">
            <span class="cell-required">*</span>婚姻状况
            </span>
            <select class="data-cell-input" name="marital" id="" v-model="formData.maritalStatus">
                <option value=1>未婚</option>
                <option value=2>已婚</option>
                <option value=0>离异</option>
            </select>
        </div>
        <div class="data-cell">
            <span class="data-cell-label">
            <span class="cell-required">*</span>户主名称
            </span>
            <input class="data-cell-input" type="text" placeholder="请输入户主名称" v-model="formData.houseOwner">
        </div>
        <div class="data-cell">
            <span class="data-cell-label">
            <span class="cell-required">*</span>现任公司名称
            </span>
            <input class="data-cell-input" type="text" placeholder="请输入现任公司名称" v-model="formData.companyName">
        </div>
        <div class="data-cell">
            <span class="data-cell-label">所在部门
            </span>
            <input class="data-cell-input" type="text" placeholder="请输入所在部门" v-model="formData.sector">
        </div>
        <div class="data-cell">
            <span class="data-cell-label">职位
            </span>
            <input class="data-cell-input" type="text" placeholder="请输入职位" v-model="formData.position">
        </div>
        <div class="data-cell">
            <span class="data-cell-label">公司地址
            </span>
            <input class="data-cell-input" type="text" placeholder="请输入公司地址" v-model="formData.companyAddr">
        </div>
        <div class="data-cell">
            <span class="data-cell-label">公司电话
            </span>
            <input class="data-cell-input" type="text" placeholder="请输入公司电话" v-model="formData.companyPhone">
        </div>
        <div class="data-cell">
            <span class="data-cell-label">现任工作年限
            </span>
            <input class="data-cell-input" type="text" placeholder="请输入工作年限" v-model="formData.jobAge">
        </div>
        <div class="data-cell">
            <span class="data-cell-label">工作月收入
            </span>
            <input class="data-cell-input" type="text" placeholder="请输入工作月收入" v-model="formData.incomeMon">
        </div>
        <div class="data-cell">
            <span class="data-cell-label">介绍人姓名
            </span>
            <input class="data-cell-input" type="text" placeholder="请输入介绍人姓名" v-model="formData.introducerName">
        </div>
        <div class="data-cell">
            <span class="data-cell-label">介绍人电话
            </span>
            <input class="data-cell-input" type="text" placeholder="请输入介绍人电话" v-model="formData.introducerPhone">
        </div>
        <div class="data-cell">
            <span class="data-cell-label">备注
            </span>
            <input class="data-cell-input" type="text" placeholder="备注" v-model="formData.remark">
        </div>
        <div class="button-container-back-next">
            <mt-button type="danger" class="button-back" @click="handleBack">上一步</mt-button>
            <mt-button type="primary" class="button-next" @click="handleNext">下一步</mt-button>
        </div>
    </div>
</template>
<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

