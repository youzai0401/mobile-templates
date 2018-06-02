import vHeader from '../Header/index.vue';
import common from '../../common/common';
import storage from '../../common/storage.js';
import {fetch} from '../../common/request';

let timer;
export default {
    created() {
        this.$bus.$on('collapsed', () => {
            this.collapsed = !this.collapsed;
        });
    },
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
        return {
            collapsed: false
        };
    },
    methods: {
        backLogin() {
            this.clearTimer();
            const ms = 60 * 60 * 1000;
            const goLogin = async() => {
                const res = await fetch().get('/pyramid/user/logout', {params: {userName: common.store.getUser().name}}).catch(() => {
                });
                if (res.data.code === 200) {
                    storage.local.removeItem('user');
                    this.$router.push('/login');
                }
            };
            timer = window.setTimeout(() => goLogin, ms);
        },
        bindEvent() {
            $(window).on('click mousemove', () => {
                this.backLogin();
            });
            $('#lw-content').on('scroll', () => {
                this.backLogin();
            });
        },
        clearTimer() {
            if (timer) {
                window.clearTimeout(timer);
                timer = null;
            }
        },
        unbindEvent() {
            $(window).unbind('click mousemove');
            $('#lw-content').unbind('scroll');
        }
    },
    components: {
        vHeader
    }
};
