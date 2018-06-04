// import {fetch} from '../../common/request';
import common from '../../common/common';

export default {
    data() {
        return {
            username: '',
            email: '',
            password: '',
            phone: '',
            introduction: ''
        };
    },
    mounted() {},
    methods: {
        handleLoanSuccess() {
            this.$router.push('/');
        },
        handleLoanFailed() {
            this.$router.push('/personal-data');
        }
    }
};
