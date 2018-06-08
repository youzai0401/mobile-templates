import {fetch} from '../../common/request';
import common from '../../common/common';

export default {
    data() {
        return {
            path: this.$route,
            formData: {
                name: '',
                relation: '',
                phoneNum: '',
                company: ''
            }
        };
    },
    mounted() {},
    methods: {
        handleBack() {
            this.$router.push('/bankCard-data');
        },
        handleNext() {
            // 保存数据
            this.$router.push('/debt-data');
        }
    }
};
