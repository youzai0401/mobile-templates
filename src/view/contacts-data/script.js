import server from '../../api/util/index';
import { MessageBox } from 'mint-ui';
import validatorFunction from '../../common/validatorFunction';
import common from '../../common/common';


export default {
    data() {
        return {
            path: this.$route,
            openid: common.store.getOpenid(),
            isComplete: false,
            formData: {
                openid: common.store.getOpenid(),
                name: '',
                relation: '父子',
                phoneNum: '',
                company: ''
            },
            formDataSecond: {
                openid: common.store.getOpenid(),
                name: '',
                relation: '母子',
                phoneNum: '',
                company: ''
            },
            formDataThird: {
                openid: common.store.getOpenid(),
                name: '',
                relation: '夫妻',
                phoneNum: '',
                company: ''
            },
            formDataFour: {
                openid: common.store.getOpenid(),
                name: '',
                relation: '朋友',
                phoneNum: '',
                company: ''
            },
            otherContacts: [{
                openid: common.store.getOpenid(),
                name: '',
                relation: '',
                phoneNum: '',
                company: ''
            }],
            rules: {
                name: [
                    { require: true, message: '姓名不能为空' },
                    { maxLength: 500, message: '输入长度不能超出500' }
                ],
                relation: [
                    { require: true, message: '关系不能为空' },
                    { maxLength: 500, message: '输入长度不能超出500' }
                ],
                phoneNum: [
                    { require: true, message: '联系电话不能为空' },
                    { maxLength: 500, message: '输入长度不能超出500' }
                ],
                company: [
                    { require: true, message: '工作单位不能为空' },
                    { maxLength: 500, message: '输入长度不能超出500' }
                ]
            }
        };
    },
    async mounted() {
        // 获取openid
        const openid = common.store.getOpenid();
        const res = await server.getContactsData(openid).catch(() => {
            MessageBox('提示', '系统错误');
        });
        if (res && res.data && res.data.code === 200) {
            // 将获取到的数据赋值
            const resData = res.data.data;
            if (resData && resData.length !== 0) {
                this.formData = resData[0];
                this.formDataSecond = resData[1];
                if (resData.length === 3) {
                    this.formDataThird = resData[2];
                }
                if (resData.length >= 4) {
                    this.formDataThird = resData[2];
                    this.formDataFour = resData[3];
                }
            }
            // 判断全部数据是否填写完整
            const dataIsComplete = common.store.getDataIsComplete();
            if (dataIsComplete) {
                this.isComplete = true;
            }
        }
    },
    methods: {
        handleBack() {
            this.$router.push('/bankCard-data');
        },
        async handleNext() {
            // 保存数据
            const rulesResult = validatorFunction(this.formData, this.rules);
            const rulesResultSecond = validatorFunction(this.formDataSecond, this.rules);
            console.log(rulesResult);
            if (rulesResult.result && rulesResultSecond.result) {
                // 校验成功，保存信息
                // todo 将数据拼接到data上
                const saveData = [];
                saveData.push(this.formData);
                saveData.push(this.formDataSecond);
                saveData.push(this.formDataThird);
                saveData.push(this.formDataFour);
                // saveData = saveData.concat(this.otherContacts);
                const res = await server.postContactsData(saveData).catch(() => {
                    MessageBox('提示', '系统错误');
                });
                if (res && res.data && res.data.code === 200) {
                    this.$router.push('/debt-data');
                }
            } else {
                const alertMessage = [];
                for (const key in rulesResult.detail) {
                    if (!rulesResult.detail[key].isPass) {
                        alertMessage.push(rulesResult.detail[ key ].message);
                    }
                }
                for (const key in rulesResultSecond.detail) {
                    // this.rulesState[key] = rulesResultSecond.detail[key].isPass ? 'success' : 'error';
                    if (!rulesResultSecond.detail[ key ].isPass) {
                        alertMessage.push(rulesResultSecond.detail[ key ].message);
                    }
                }
                MessageBox('提示', alertMessage[ 0 ]);
            }
        },
        addNewContacts() {
            this.otherContacts.push({
                openid: this.openid,
                name: '',
                relation: '',
                phoneNum: '',
                company: ''
            });
        },
        deleteNewContacts(index) {
            this.otherContacts.splice(index, 1);
        }
    }
};
