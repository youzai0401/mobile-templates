import Vue from 'vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

import App from './App';
import router from './router';
// promise兼容ie，处理axios菜蔬
import 'babel-polyfill';
// 初始化全局http回调
import {init} from './common/request.js';

Vue.use(MintUI);

import './main.less';

// custom loading
Vue.prototype.$bus = new Vue();
// 定义全局变量
// Vue.prototype.$global = {maxL: 30};
/* eslint-disable no-new */
console.log('============================================');
console.log('执行了main代码是的吧');

const vm = new Vue({
    el: '#app',
    // store,
    router,
    template: '<App/>',
    components: {App}
});

// vm.$alert('错误信息', '系统提示信息', {
//     confirmButtonText: '确定',
//     customClass: 're-alert-error-message'
// });

init({
    success(res) {
        if (res.data.code === 108) {
            return vm.$router.replace('/login');
        }
        if ((res.data.code || res.data.code === 0) && res.data.code !== 200) {
            const message = res.data.message ? res.data.message : '系统错误';
            console.log(message);
        }
        // vm.$message.success('操作成功');
    },
    error(err) {
        if (err.response.status === 401) {
            return vm.$router.replace('/login');
        }
        console.log('err:', err);
        const errMsg = err.response.data.message || err;
        console.log(errMsg);
    }
});

