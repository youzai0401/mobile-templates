<template>
    <div class="id-data">
        <div class="data-cell">
            <span class="data-cell-label">姓名
            <span class="cell-required">*</span>
            </span>
            <input class="data-cell-input" type="text" placeholder="请输入姓名" v-model="formData.name">
        </div>
        <div class="data-cell">
            <span class="data-cell-label">身份证号
            <span class="cell-required">*</span>
            </span>
            <input class="data-cell-input" type="text" placeholder="请输入身份证号" v-model="formData.identityId">
        </div>
        <div class="id-data-photo-tips">
            <p><span class="cell-required">*</span>须本人身份证，且内容清晰可辨</p>
            <p><span class="cell-required">*</span>请从本地相册选择照片上传</p>
        </div>
        <input style="display: none" name="file" type="file" id="uploadFrontImg"
               accept="image/png,image/gif,image/jpeg, image/jpg"
               @change="upload($event,'front')"/>
        <div class="id-data-upload" @click="handleUploadImg('front')">
            <svg class="icon upload-icon" aria-hidden="true">
                <use xlink:href="#icon-camera1"></use>
            </svg>
            <p class="upload-tips">身份正面照片扫描上传</p>
            <img class="upload-img" :src="formData.cardFront" alt="">
            <!--<img class="upload-img" src="http://111.230.115.167/2018/6/9/27a16b799c4a4340936a053086c99457.jpg" alt="">-->
        </div>
        <input style="display: none" name="file" type="file" id="uploadBackImg" accept="image/png,image/gif,image/jpeg, image/jpg"
               @change="upload($event,'back')"/>
        <div class="id-data-upload" @click="handleUploadImg('back')">
            <svg class="icon upload-icon" aria-hidden="true">
                <use xlink:href="#icon-camera1"></use>
            </svg>
            <p class="upload-tips">身份反面照片扫描上传</p>
            <img class="upload-img" :src="formData.cardBack" alt="">
        </div>
        <input style="display: none" name="file" type="file" id="uploadBodyImg" accept="image/png,image/gif,image/jpeg, image/jpg"
               @change="upload($event,'body')"/>
        <div class="id-data-upload" @click="handleUploadImg('body')">
            <div>
                <svg class="icon upload-icon" aria-hidden="true">
                    <use xlink:href="#icon-camera1"></use>
                </svg>
                <p class="upload-tips">手持身份证照片扫描上传</p>
            </div>
            <img class="upload-img" :src="formData.cardPerson" alt="">
        </div>
        <div class="button-container-back-next">
            <mt-button type="danger" class="button-back" @click="handleBack">上一步</mt-button>
            <mt-button type="primary" class="button-next" @click="handleNext">下一步</mt-button>
        </div>

    </div>
</template>
<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

