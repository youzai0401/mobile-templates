<template>
    <mt-header fixed  title="多个按钮">
      <router-link to="/" slot="left">
        <mt-button icon="back" @click="handleBack">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right" @click="handleMenu"></mt-button>
    </mt-header>
</template>
<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

