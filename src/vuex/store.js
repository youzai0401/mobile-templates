/**
 * Created by zhang on 2017/5/8.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
// import * as actions from './actions'
// 导入各个模块的初始状态和 mutations
import modules from './modules';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const plugins = [];
if (debug) {
    plugins.push(createLogger({}));
}

export default new Vuex.Store({
    // 组合各个模块
    modules,
    strict: debug,
    plugins
});
