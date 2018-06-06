import {fetch} from '../../common/request';
import common from '../../common/common';
import axios from 'axios';


export default {
    data() {
        return {
            path: this.$route,
            params: this.$route.params
        };
    },
    mounted() {
    },
    methods: {
        upload(e) {
            const self = this;
            const file = e.target.files[0];
            /* eslint-disable no-undef */
            const param = new FormData();
            // 创建form对象
            param.append('file', file, file.name);
            // 通过append向form对象添加数据
            // param.append('chunk', '0'); // 添加form表单中其他数据
            console.log(param.get('file')); // FormData私有类对象，访问不到，可以通过get判断值是否传进去
            const config = {
                headers: {'Content-Type': 'multipart/form-data'}
            };
            // 添加请求头
            axios.post('http://newtestadmin.lex.lenovo.com.cn/pyramid/uploadImg', param, config)
                .then(response => {
                    if (response.data.code === 0) {
                        self.ImgUrl = response.data.data;
                    }
                    console.log(response.data);
                });
        }
    }
};