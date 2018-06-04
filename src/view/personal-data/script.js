import {fetch} from '../../common/request';
import common from '../../common/common';

export default {
    data() {
        return {
            path: this.$route
        };
    },
    mounted() {},
    methods: {
        handleLogout() {
            common.store.clear();
            this.$router.push('/login');
        }
    }
};
