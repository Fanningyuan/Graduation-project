<template>
    <div style="margin-top:60px">
        <img src=".././assets/0.jpg">
        <br/>
        <input type="text" v-model="loginForm.username" placeholder="用户名"/><br>
        <input type="password" v-model="loginForm.password" placeholder="密码"/><br>
        <button @click="login">登录</button>
        <router-link style="margin-left:20px" to="register">注册</router-link><br>
    </div>
</template>

<script type="text/javascript">
    export default {
        data() {
            return{
                loginForm: {
                    username: '',
                    password: ''
                }
            }
        },
        methods:{
            login(){
                let _this = this;
                if (this.loginForm.username === '' || this.loginForm.password === '') {
                    alert('账号或密码不能为空');
                } else {
                    this.axios({
                        method: 'post',
                        url: 'http://127.0.0.1/login',
                        data: _this.loginForm
                    }).then(res => {
                        console.log(res.data);
                        _this.userToken = 'Bearer ' + res.data.data.body.token;
                        _this.changeLogin({ Authorization: _this.userToken });
                        _this.$router.push('/home');
                        alert('登陆成功');
                    }).catch(error => {
                        alert('账号或密码错误');
                        console.log(error);
                    });
                } 
            }
        }

    }


</script>

<style>
    input{
        width: 340px;
        padding: 0 25px;
        height: 44px;
        border: 1px solid #f2f2f2;
        background: #f6f6f6;
        color: #202124;
        font-size: 14px;
        line-height: 48px;
        border-radius: 15px;
        margin-top:25px;
    }
    img{
        width:250px;
        height:250px;
        border-radius: 60px;
        overflow:hidden;
    }
    button{
        width:65px;
        height:30px;
        margin-top:50px;
        margin-left:-30px;
    }
    a{
        text-decoration: none;
    }
</style>