<template>
    <div class="errPage-container">
        <img :src="errImg" alt="">
        <div>呜呜,找不到服务了~~</div>
        <div @click="back" class="btn">返回首页</div>
    </div>
</template>
<style scoped lang="less" src="./style.less"></style>

<script>
    import errImg from './img/404.png';
    import common from '../../common/common';
    export default {
        data() {
            return {errImg};
        },
        methods: {
            back() {
                this.$router.push('/home');
            }
        }
    };
</script>


