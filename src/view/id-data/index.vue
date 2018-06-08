<template>
    <div class="id-data">
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
            <span class="data-cell-label">身份证号
            <span class="cell-required">*</span>
            </span>
            <input class="data-cell-input" type="text" v-model="formData.identityId">
            <span class="mint-field-state is-success">
                <i class="mintui mintui-field-success"></i>
            </span>
        </div>
        <div class="id-data-photo-tips">
            <p><span class="cell-required">*</span>须本人身份证，且内容清晰可辨</p>
            <p><span class="cell-required">*</span>请您确认拍照权限已开启</p>
        </div>
        <input style="display: none"  name="file" type="file" id="uploadFrontImg" accept="image/png,image/gif,image/jpeg" @change="upload"/>
        <div class="id-data-upload" @click="handleUploadFrontImg">
            <svg class="icon upload-icon" aria-hidden="true">
                <use xlink:href="#icon-camera1"></use>
            </svg>
            <p class="upload-tips">身份正面照片扫描上传</p>
            <img src="" alt="">
        </div>
        <input style="display: none"  name="file" type="file" id="uploadBackImg" accept="image/png,image/gif,image/jpeg" @change="upload"/>
        <div class="id-data-upload" @click="handleUploadFrontImg">
            <svg class="icon upload-icon" aria-hidden="true">
                <use xlink:href="#icon-camera1"></use>
            </svg>
            <p class="upload-tips">身份反面照片扫描上传</p>
            <img src="" alt="">
        </div>
        <input style="display: none"  name="file" type="file" id="uploadBodyImg" accept="image/png,image/gif,image/jpeg" @change="upload"/>
        <div class="id-data-upload" @click="handleUploadFrontImg">
            <svg class="icon upload-icon" aria-hidden="true">
                <use xlink:href="#icon-camera1"></use>
            </svg>
            <p class="upload-tips">手持身份证照片扫描上传</p>
            <img src="" alt="">
        </div>
        <div class="button-container-back-next">
            <mt-button type="danger" class="button-back" @click="handleBack">上一步</mt-button>
            <mt-button type="primary" class="button-next" @click="handleNext">下一步</mt-button>
        </div>

    </div>
</template>
<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

