<template>
    <div class="loan">
        <div class="range-container">
            <h3 class="loan-title">申请金额（元）</h3>
            <h2 class="loan-rangeValue">{{formData.value}}.00</h2>
            <div class="loan-rang-container">
                <svg class="icon loan-icon-dec" aria-hidden="true" @click="handleDec">
                    <use xlink:href="#icon-jian"></use>
                </svg>
                <mt-range class="loan-rang"
                          :min="3"
                          v-model="rangeValue"
                          :bar-height="10">
                    <div slot="start" class="start-value">1000</div>
                    <div slot="end" class="end-value">30000</div>
                </mt-range>
                <svg class="icon loan-icon-add" aria-hidden="true" @click="handleAdd">
                    <use xlink:href="#icon-jia"></use>
                </svg>
            </div>
        </div>
        <p class="loan-time-title">借款期限</p>
        <template v-for="item in timeArr">
            <span @click="handleSelectTime(item.id, item.name, item.rate)" v-bind:class="[item.id == selectId ? 'active-class' : '', 'loan-time']">{{item.name}}</span>
        </template>
        <p class="loan-time-title">当前利率：{{currentRate}}</p>
        <div class="loan-use">
            <span class="loan-use-label"><span class="cell-required">*</span>借款用途</span>
            <textarea class="loan-use-reason" v-model="formData.purpose" rows="5" cols="15" placeholder="请输入借款用途"></textarea>
        </div>
        <!--<p class="loan-agreement">-->
            <!--<svg v-show="!isAgreement" class="icon loan-icon-agreement" aria-hidden="true" @click="handleAgreement">-->
                <!--<use xlink:href="#icon-check-box-outline-blank"></use>-->
            <!--</svg>-->
            <!--<svg v-show="isAgreement" class="icon loan-icon-agreement" aria-hidden="true" @click="handleAgreement">-->
                <!--<use xlink:href="#icon-check-box"></use>-->
            <!--</svg>-->
            <!--<span>同意 <span style="color:#cf9b41" @click="handleAgreementFile">《平台服务协议》</span></span>-->
        <!--</p>-->
        <p class="loan-warning">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-72jingshi"></use>
            </svg>
            <span>不向学生提供服务</span>
        </p>
        <mt-button class="loan-button" type="primary" v-show="dataIsComplete" @click.native="handleLoanSuccess">立即借贷</mt-button>
        <mt-button class="loan-button" type="primary" v-show="!dataIsComplete" @click.native="handleLoanFailed">完善信息</mt-button>
        <!--<div class="loan-agreement-container" v-show="alertLoanAgreement">-->
            <!--<p class="loan-agreement-title">平台服务协议</p>-->
            <!--<div class="loan-agreement-content">-->
                <!--<p >平台服务协议</p>-->
            <!--</div>-->
            <!--<mt-button class="loan-agreement-button" type="primary" @click.native="handleAgreementFileBack">返回</mt-button>-->
        <!--</div>-->
    </div>
</template>
<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

