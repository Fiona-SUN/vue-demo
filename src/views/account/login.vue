<template>
    <div class="login-wrapper" @keyup.enter="loginFunc">
        <div class="input-wrapper">
            <span class="input-label">用户名：</span>
            <div class="input-control-wrapper">
                <input type="text" class="input-control" v-model="userName" @blur="validateValue(validateNameObj)">
                <div class="error-tip" v-show="errorTipName">{{errorTipName}}</div>
            </div>
        </div>
        <div class="input-wrapper">
            <span class="input-label">密码：</span>
            <div class="input-control-wrapper">
                <input type="password" class="input-control" v-model="pwd"  @blur="validateValue(validatePwdObj)">
                <div class="error-tip" v-show="errorTipPwd">{{errorTipPwd}}</div>
            </div>
        </div>
        <div class="input-wrapper">
            <input type="button" class="primary-btn" value="登陆" @click="loginFunc">
        </div>
    </div>
</template>
<script>
import commonMixin from '@/mixins/common';
export default {
    mixins: [commonMixin],
    data() {
        return{
            // 用户名
            userName: '',
            // 用户名错误提示
            errorTipName: '',
            // 用户名错误校验对象
            validateNameObj: {
                name: 'userName',
                tip: 'errorTipName',
                required: true,
                regExp: [{
                    err: '请输入数字、字母',
                    reg: '^([a-zA-Z0-9])+$'
                }]
            },
            // 密码
            pwd: '',
            // 密码错误提示
            errorTipPwd: '',
            // 密码错误校验对象
            validatePwdObj: {
                name: 'pwd',
                tip: 'errorTipPwd',
                required: true,
                regExp: [{
                    err: '请输入数字、字母',
                    reg: '^([a-zA-Z0-9])+$'
                }]
            }
        };
    },
    watch: {
        userName(to, from) {
            this.validateValue(this.validateNameObj);
        },
        pwd(to, from) {
            this.validateValue(this.validatePwdObj);
        }
    },
    methods: {
        // 登陆按钮
        loginFunc() {
            let nameTag = this.validateValue(this.validateNameObj);
            let pwdTag = this.validateValue(this.validatePwdObj);
            if(nameTag && pwdTag) {
                this.$store.dispatch('setTotastOptions', {
                    show: true,
                    text: '校验成功！'
                });
                // 请求后台接口
                // this.$axios.axiosHttp({
                //     url: '',
                //     method: 'get',
                //     params: {}
                // }, (resData) => {
                //     // 成功回调
                // });
            }
        }
    }
};
</script>
<style lang="scss" type="text/scss" scoped>
.login-wrapper{
    width: 350px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid $default-minor-txt;
    .input-wrapper {
        .primary-btn {
            margin-left: 145px;
        }
    }
}
</style>

