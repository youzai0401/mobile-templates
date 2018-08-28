import {fetch} from '../../common/request';
import common from '../../common/common';
import validatorFunction from '../../common/validatorFunction';
import {MessageBox} from 'mint-ui';
import server from '../../api/util/index';

export default {
    data() {
        return {};
    },
    async mounted() {
        let openid = common.store.getOpenid();
        if (!openid) {
            const code = this.GetQueryString('code');
            if (code) {
                const res1 = await server.getOpenid(code).catch(() => {
                    MessageBox('提示', '网络出了点小差，请稍后重试');
                });
                if (res1 && res1.data && res1.data.code === 200) {
                    // 保存openid
                    openid = res1.data.data.openid;
                    common.store.setOpenid(openid);
                    this.$router.push('/home');
                } else {
                    MessageBox('提示', '网络出了点小差，请稍后重试');
                }
            } else {
                const appid = 'wx45326f31cb86bf50';
                const redirect_uri = encodeURIComponent('http://wechat.xiaodai86.com');
                const scope = 'snsapi_base';
                // const href = `https://open.weixin.qq.com/connect/qrconnect?appid=wx45326f31cb86bf50&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`;
                const href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}&state=success#wechat_redirect`;
                console.log(href);
                window.location.href = href;
            }
        } else {
            this.$router.push('/home');
        }
    },
    methods: {
        GetQueryString(name) {
            const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
            const r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        }
    }
};
