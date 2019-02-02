<template>
    <div class="login">
        <div class="logo"></div>
        <h3>登录账户</h3>
        <input type="text" placeholder="员工号" autocomplete="off" v-model="account" />
        <input type="password" placeholder="姓名" autocomplete="off" v-model="password" />
        <a href="javascript: " @click="toLogin">登 录</a>
    </div>
</template>

<script>
    /**
     * @author nassua
     * @desc 登录
     * @time 2019-02-02
    */
   
    export default {
        data() {
            return {
                account: '',
                password: ''
            }
        },
        mounted() {
            window.vue = this
        },
        methods: {
            
            // 登录
            toLogin() {

                if (!this.account) {
                    Toast({
                        message: '请填写员工号',
                        position: 'top',
                        duration: 1000
                    })
                    return
                }

                if (!this.password) {
                    Toast({
                        message: '请填写姓名',
                        position: 'top',
                        duration: 1000
                    })
                    return
                }
            }
        }
    }
</script>

<style lang="less">
    .login {
        width: 100%;
        height: 100%;
        background: url('../../assets/image/login.jpg');
        background-size: 100% 100%;
        overflow: hidden;
        .logo {
            height: 90px;
            margin: 240px 0 60px;
            background: url('../../assets/image/logo.png') no-repeat center center;
            background-size: 320px 90px;
        }
        h3 {
            text-align: center;
            font-size: 28px;
        }
        a, input {
            display: block;
            width: 480px;
            height: 76px;
            margin: 30px auto 0;
        }
        input {
            border: 1px solid #000;
            text-indent: 50px;
        }
        a {
            text-align: center;
            line-height: 76px;
            background: #000;
            color: #fff;
        }
        input[type="text"] {
            background: url('../../assets/image/account.png') no-repeat 15px center;
            background-size: 20px 28px;
        }
        input[type="password"] {
            background: url('../../assets/image/password.png') no-repeat 15px center;
            background-size: 20px 24px;
        }
    }
</style>
