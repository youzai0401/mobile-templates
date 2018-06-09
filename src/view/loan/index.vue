<template>
    <div class="loan">
        <div class="range-container">
            <h3 class="loan-title">申请金额（元）</h3>
            <h2 class="loan-rangeValue">{{rangeValue*100}}.00</h2>
            <div class="loan-rang-container">
                <svg class="icon loan-icon-dec" aria-hidden="true" @click="handleDec">
                    <use xlink:href="#icon-jian"></use>
                </svg>
                <mt-range class="loan-rang"
                          :min="10"
                          v-model="rangeValue"
                          :bar-height="10">
                    <div slot="start" class="start-value">1000</div>
                    <div slot="end" class="end-value">10000</div>
                </mt-range>
                <svg class="icon loan-icon-add" aria-hidden="true" @click="handleAdd">
                    <use xlink:href="#icon-jia"></use>
                </svg>
            </div>
        </div>
        <p class="loan-time-title">借款期限</p>
        <template v-for="item in timeArr">
            <span @click="handleSelectTime(item.value)" v-bind:class="[item.value == selectValue ? 'active-class' : '', 'loan-time']">{{item.time}}</span>
        </template>
        <div class="loan-use">
            <span class="loan-use-label">借款用途</span>
            <textarea class="loan-use-reason" rows="5" cols="20" placeholder="请输入借款用途"></textarea>
        </div>
        <p class="loan-agreement">
            <svg v-show="!isAgreement" class="icon loan-icon-agreement" aria-hidden="true" @click="handleAgreement">
                <use xlink:href="#icon-check-box-outline-blank"></use>
            </svg>
            <svg v-show="isAgreement" class="icon loan-icon-agreement" aria-hidden="true" @click="handleAgreement">
                <use xlink:href="#icon-check-box"></use>
            </svg>
            <span>同意 <span style="color:#cf9b41" @click="handleAgreementFile">《平台服务协议》</span></span>
        </p>
        <p class="loan-warning">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-72jingshi"></use>
            </svg>
            <span>不向学生提供服务</span>
        </p>
        <!--// todo 第三种状态，审批中-->
        <mt-button class="loan-button" type="primary" v-show="dataIsComplete" @click.native="handleLoanSuccess">立即借贷</mt-button>
        <mt-button class="loan-button" type="primary" v-show="!dataIsComplete" @click.native="handleLoanFailed">完善信息</mt-button>
    </div>
</template>
<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

