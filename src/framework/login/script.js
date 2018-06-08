import {fetch} from '../../common/request';
import common from '../../common/common';
import validatorFunction from '../../common/validatorFunction';

export default {
    data() {
        return {
            formData: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    {require: true, message: '用户名不能为空'},
                    {maxLength: 20, message: '用户名最长不能超过20位'}
                    // {reg: /^[1][3,4,5,7,8][0-9]{9}$/, message: '输入的名称不符合要求'}
                ],
                password: [
                    {require: true, message: '密码不能为空'}
                ]
            },
            rulesState: {
                username: '',
                password: ''
            }
        };
    },
    mounted() {},
    methods: {
        handleLogin() {
            const rulesResult = validatorFunction(this.formData, this.rules);
            console.log(rulesResult);
            if (rulesResult.result) {
                // 校验成功，去登录
            } else {
                for (const key in rulesResult.detail) {
                    this.rulesState[key] = rulesResult.detail[key].isPass ? 'success' : 'error';
                }
            }
            if (this.formData.username === 'admin' && this.formData.password === '123456') {
                common.store.clear();
                common.store.setUser({
                    username: 'admin',
                    password: '123456'
                });
                this.$router.push('/');
            }
        }
    }
};
