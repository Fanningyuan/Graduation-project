<template>
    <div style="margin-top:60px">
        <img src=".././assets/0.jpg">
        <br/>
        <input type="text" placeholder="用户名"/><br>
        <input type="text" placeholder="密码"/><br>
        <button @click="home">登录</button>
        <router-link style="margin-left:20px" to="register">注册</router-link><br>
    </div>
</template>

<style>
    input[type=text] {
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
    a {
        text-decoration: none;
    }
</style>