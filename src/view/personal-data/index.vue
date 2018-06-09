routes.js
<template>
    <div class="loan">
        <p v-show="!dataIsComplete" class="complete-loan-tips" v-cloak>完善资料，贷款和你仅一步之遥</p>
        <!--<mt-cell title="身份信息" label="让我们了解您的基本情况" is-link to="/id-data">-->
            <!--<span>icon 是图片</span>-->
            <!--<img slot="icon" src="../../../static/img/circle-1.png" width="24" height="24">-->
        <!--</mt-cell>-->
        <!--<router-link :to="{name: 'id-data', params: {id:123,is: true}}">身份信息</router-link>-->
        <!--<router-link to="/information-data">资料信息</router-link>-->
        <!--<router-link to="/bankCard-data">收款银行卡</router-link>-->
        <!--<router-link to="/contacts-data">联系人信息</router-link>-->
        <template v-for="item in linkArr">
            <a data-v-08be293e="" :href="item.href" class="loan-cell">
                <span class="loan-cell-mask"></span>
                <div class="loan-cell-left"></div>
                <div class="loan-cell-wrapper">
                    <svg class="icon loan-icon" aria-hidden="true">
                        <use :xlink:href="item.icon"></use>
                    </svg>
                    <div class="loan-cell-title"><!---->
                        <span class="loan-cell-text">{{item.title}}
                            <span v-show="item.showFlag" class="require-tip">*</span>
                        </span>
                        <span v-show="item.showFlag && item.showType === 1" class="mint-field-state is-success">
                            <i class="mintui mintui-field-success"></i>
                        </span>
                        <span v-show="item.showFlag && item.showType === 0" class="mint-field-state is-warning">
                            <i class="mintui mintui-field-warning"></i>
                        </span>
                        <span class="loan-cell-label">{{item.label}}</span></div>
                    <div class="loan-cell-value is-link"><span></span></div>
                    <i class="loan-cell-allow-right"></i></div>
                <div class="loan-cell-right"></div>
            </a>
        </template>
        <!--<div data-v-08be293e="" class="loan-cell" @click="handleLogout">&lt;!&ndash;&ndash;&gt;-->
            <!--<div class="loan-cell-left"></div>-->
            <!--<div class="loan-cell-wrapper" >-->
                <!--<svg class="icon loan-icon" aria-hidden="true">-->
                    <!--<use xlink:href="#icon-swticontuichu"></use>-->
                <!--</svg>-->
                <!--<div class="loan-cell-title">&lt;!&ndash;&ndash;&gt;-->
                    <!--<span class="loan-cell-text">退出登录</span> &lt;!&ndash;&ndash;&gt;</div>-->
                <!--<div class="loan-cell-value"><span></span></div> &lt;!&ndash;&ndash;&gt;</div>-->
            <!--<div class="loan-cell-right"></div>-->
        <!--</div>-->
        <div class="loan-button-container">
            <mt-button v-show="dataIsComplete" type="primary" @click="handleLoan" class="loan-button">立即借款</mt-button>
            <mt-button v-show="!dataIsComplete" type="primary" class="loan-button">完善资料</mt-button>
        </div>
    </div>
</template>
<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

