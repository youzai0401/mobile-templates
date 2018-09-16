<template>
  <div class="contacts-data">
    <div class="contacts-container">
      <!--<div class="data-cell">-->
      <!--&lt;!&ndash;<span class="data-cell-label">&ndash;&gt;-->
      <!--&lt;!&ndash;<span class="cell-required">*</span>关系</span>&ndash;&gt;-->
      <!--&lt;!&ndash;<input class="data-cell-input" type="text" placeholder="请输入关系" v-model="formData.relation">&ndash;&gt;-->
      <!--</div>-->
      <div class="data-cell">
            <span class="data-cell-label">
            <span class="cell-required">*</span>父亲姓名
            </span>
        <input class="data-cell-input" type="text" :class="{'disable-input': isComplete}" :disabled="isComplete" placeholder="请输入姓名" v-model="formData.name">
      </div>
      <div class="data-cell">
            <span class="data-cell-label">
            <span class="cell-required">*</span>联系电话
            </span>
        <input class="data-cell-input" type="text" :class="{'disable-input': isComplete}" :disabled="isComplete" placeholder="请输入联系方式" v-model="formData.phoneNum">
      </div>
      <div class="data-cell">
            <span class="data-cell-label">
            <span class="cell-required">*</span>工作单位
            </span>
        <input class="data-cell-input" type="text" :class="{'disable-input': isComplete}" :disabled="isComplete" placeholder="请输入单位" v-model="formData.company">
      </div>
    </div>
    <div class="contacts-container">
      <!--<div class="data-cell">-->
      <!--<span class="data-cell-label">-->
      <!--<span class="cell-required">*</span>关系-->
      <!--</span>-->
      <!--<input class="data-cell-input" type="text" placeholder="请输入关系" v-model="formDataSecond.relation">-->
      <!--</div>-->
      <div class="data-cell">
            <span class="data-cell-label">
            <span class="cell-required">*</span>母亲姓名
            </span>
        <input class="data-cell-input" type="text" :class="{'disable-input': isComplete}" :disabled="isComplete" placeholder="请输入姓名" v-model="formDataSecond.name">
      </div>
      <div class="data-cell">
            <span class="data-cell-label">
            <span class="cell-required">*</span>联系电话
            </span>
        <input class="data-cell-input" type="text" :class="{'disable-input': isComplete}" :disabled="isComplete" placeholder="请输入联系方式" v-model="formDataSecond.phoneNum">
      </div>
      <div class="data-cell">
            <span class="data-cell-label">
            <span class="cell-required">*</span>工作单位
            </span>
        <input class="data-cell-input" type="text" :class="{'disable-input': isComplete}" :disabled="isComplete" placeholder="请输入单位" v-model="formDataSecond.company">
      </div>
    </div>
    <div class="contacts-container">
      <!--<div class="data-cell">-->
      <!--<span class="data-cell-label">-->
      <!--<span class="cell-required">*</span>关系-->
      <!--</span>-->
      <!--<input class="data-cell-input" type="text" placeholder="请输入关系" v-model="formDataSecond.relation">-->
      <!--</div>-->
      <div class="data-cell">
            <span class="data-cell-label">
            配偶姓名
            </span>
        <input class="data-cell-input" type="text" placeholder="请输入姓名" v-model="formDataThird.name">
      </div>
      <div class="data-cell">
            <span class="data-cell-label">
            联系电话
            </span>
        <input class="data-cell-input" type="text" placeholder="请输入联系方式" v-model="formDataThird.phoneNum">
      </div>
      <div class="data-cell">
            <span class="data-cell-label">
            工作单位
            </span>
        <input class="data-cell-input" type="text" placeholder="请输入单位" v-model="formDataThird.company">
      </div>
    </div>
    <div class="contacts-container">
      <!--<div class="data-cell">-->
      <!--<span class="data-cell-label">-->
      <!--<span class="cell-required">*</span>关系-->
      <!--</span>-->
      <!--<input class="data-cell-input" type="text" placeholder="请输入关系" v-model="formDataSecond.relation">-->
      <!--</div>-->
      <div class="data-cell">
            <span class="data-cell-label">
            朋友姓名
            </span>
        <input class="data-cell-input" type="text" placeholder="请输入姓名" v-model="formDataFour.name">
      </div>
      <div class="data-cell">
            <span class="data-cell-label">
            联系电话
            </span>
        <input class="data-cell-input" type="text" placeholder="请输入联系方式" v-model="formDataFour.phoneNum">
      </div>
      <div class="data-cell">
            <span class="data-cell-label">
            工作单位
            </span>
        <input class="data-cell-input" type="text" placeholder="请输入单位" v-model="formDataFour.company">
      </div>
    </div>
    <!--<template v-for="(item,index) in otherContacts">-->
      <!--<div class="contacts-container">-->
        <!--<div class="data-cell">-->
          <!--<p class="data-cell-add" v-show="otherContacts.length === (index+1)" @click="addNewContacts">新增</p>-->
          <!--<p class="data-cell-delete" v-show="otherContacts.length > 1" @click="deleteNewContacts(index)">删除</p>-->
        <!--</div>-->
        <!--<div class="data-cell">-->
          <!--<span class="data-cell-label">关系</span>-->
          <!--<input class="data-cell-input" type="text" v-model="item.relation">-->
        <!--</div>-->
        <!--<div class="data-cell">-->
          <!--<span class="data-cell-label">姓名</span>-->
          <!--<input class="data-cell-input" type="text" v-model="item.name">-->
        <!--</div>-->
        <!--<div class="data-cell">-->
          <!--<span class="data-cell-label">联系电话</span>-->
          <!--<input class="data-cell-input" type="text" v-model="item.phoneNum">-->
        <!--</div>-->
        <!--<div class="data-cell">-->
          <!--<span class="data-cell-label">工作单位</span>-->
          <!--<input class="data-cell-input" type="text" v-model="item.company">-->
        <!--</div>-->
      <!--</div>-->
    <!--</template>-->
    <div class="button-container-back-next">
      <mt-button type="danger" class="button-back" @click="handleBack">上一步</mt-button>
      <mt-button type="primary" class="button-next" @click="handleNext">保存</mt-button>
    </div>
  </div>
</template>
<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

