import {fetch} from '../../common/request';
import common from '../../common/common';

export default {
    data() {
        return {
            formData: {
                username: '',
                password: ''
            }
        };
    },
    mounted() {},
    methods: {
        handleLogin() {
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
