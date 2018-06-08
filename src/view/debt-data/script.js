import {fetch} from '../../common/request';
import common from '../../common/common';

export default {
    data() {
        return {
            path: this.$route,
            name: ''
        };
    },
    mounted() {},
    methods: {
        handleBack() {
            this.$router.push('/contacts-data');
        },
        handleNext() {
            // 保存数据
            this.$router.push('/personal-data');
        }
    }
};
