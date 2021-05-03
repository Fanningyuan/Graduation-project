<template>
    <div style="margin-top:60px">
        <img style="width:250px" src=".././assets/0.jpg"><br/>
        <input type="text" placeholder="请输入用户名"/><br>
        <input type="password" placeholder="请输入密码"/><br>
        <button>登录</button>
        <router-link to="register" style="margin-left:20px">注册</router-link>
    </div>
</template>
 



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
        margin-left:540px;
    }
    img{
        width:250px;
        height:250px;
        margin-left:600px;
        border-radius: 60px;
        overflow:hidden;
    }
    button{
        width:65px;
        height:30px;
        margin-top:50px;
        margin-left:60px;
    }
    a{
        text-decoration: none;
    }
</style>