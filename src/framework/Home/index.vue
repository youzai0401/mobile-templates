<template>
  <div class="wrapper">
    <div class="container" >
      <v-header></v-header>
      <div class="content" id="lw-content">
        <transition name="move" mode="out-in"><router-view></router-view></transition>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

