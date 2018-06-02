import vHeader from '../Header/index.vue';
import common from '../../common/common';
import storage from '../../common/storage.js';
import {fetch} from '../../common/request';

let timer;
export default {
    created() {},
    mounted() {
        console.log('cookie:', common.getRememberMe());
        if (!common.getRememberMe()) {
            this.backLogin();
            this.bindEvent();
        }
    },
    destroyed() {
        this.clearTimer();
        this.unbindEvent();
    },
    data() {
        return {};
    },
    methods: {},
    components: {
        vHeader
    }
};
