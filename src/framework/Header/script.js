import axios from 'axios';
import storage from '../../common/storage.js';

export default {
    data() {
        return {
            isActive: false,
            currentPath: this.$route.path,
            isShowBack: !(this.$route.path === '/personal-data' || this.$route.path === '/'),
            title: this.$route.meta.pageTitle,
            showMenu: false
        };
    },
    computed: {
        userName() {
            return name ? name : '未登录';
        }
    },
    watch: {
        '$route'() {
            this.title = this.$route.meta.pageTitle;
            this.isShowBack = !(this.$route.path === '/personal-data' || this.$route.path === '/');
            this.showMenu = false;
        }
    },
    mounted() {
        this.title = this.$route.meta.pageTitle;
        this.isShowBack = !(this.$route.path === '/personal-data' || this.$route.path === '/');
        this.showMenu = false;
    },
    methods: {
        handleMenu() {
            console.log('弹出菜单');
            this.showMenu = !this.showMenu;
        },
        handleCommand(command) {
            if (command === 'loginout') {
                this.logout();
            }
            if (command === 'editPassword') {
                this.editPassword();
            }
        },
        async logout() {
            console.log(333, this.userName);
            const res = await axios.get('/pyramid/user/logout', {params: {userName: this.userName}}).catch(() => {
            });
            if (res.data.code === 200) {
                storage.local.removeItem('user');
                this.$router.replace('/login');
                console.log('退出成功');
            } else {
                vm.$message.error('退出失败');
            }
        },
        editPassword() {
            this.$router.push('/edit_password');
        },
        // xj add
        switchSpread() {
            this.isActive = !this.isActive;
            this.$bus.$emit('collapsed', this.isActive);
        }
    }
};
