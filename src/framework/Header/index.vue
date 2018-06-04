<template>
    <div>
        <mt-header fixed :title="title">
            <router-link to="/personal-data" slot="left" v-show="isShowBack">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right" @click.native="handleMenu"></mt-button>
        </mt-header>
        <div class="menu" v-show="showMenu">
            <router-link to="/" slot="left">我的借贷</router-link>
            <p class="split-line"></p>
            <router-link to="/personal-data" slot="left">我的资料</router-link>
        </div>
    </div>

</template>
<style scoped src="./style.css"></style>
<script src="./script.js"></script>

