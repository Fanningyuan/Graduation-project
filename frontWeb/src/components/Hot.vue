<template>
    <div>
        <div class="one">
            <img style="width:80px;height:80px;border-radius: 22px;overflow:hidden;float:left;margin-left:300px;" src=".././assets/0.jpg">
            <router-link to="/">首页</router-link>
            <router-link style="font-weight:bold" to="hot">热门歌曲</router-link>
            <router-link to="new">最新歌单</router-link>
            <router-link to="vip">VIP</router-link>
            <router-link to="mine">我的音乐</router-link>
            <a1>username</a1>   
            <router-link to="login"><a2>退出登录</a2></router-link>
        </div>
        <div class="two">
            <div style="width:180px;height:250px;margin-left:250px;float:left">
                <p>热门音乐</p>
            </div>
            <div style="width:1000px;height:600px;background-color:red;float:left">
                <div>
                    <img style="width:100px;height:100px;float:left;" src=".././assets/sheng.jpg">
                    <p>飙升榜</p>
                </div>
            </div>
        </div>
        <div class="three">

        </div>
    </div>
</template>
<script>
    
</script>
<style>
    
    a{
        width:120px;
        height:80px;    
        float:left;
        font-size:18px;
        line-height:80px;
        text-align:center;
        color:black;
        text-decoration: none;

    }
    a1{
        width:80px;
        height:80px;    
        float:left;
        line-height:80px;
        text-align:center;
        margin-left:80px;
    }
    a2{
        width:80px;
        height:80px;    
        float:left;
        line-height:80px;
        text-align:center;
        font-size:14px;
    }
    .one{
        width:100%;
        height:80px;
        background:#dee1e6;
        position:fixed;
        top:0;
    }
    .two{
        width:100%;
        height:600px;
        padding-top:100px;
    }
    .three{
        width: 100%;
        height: 80px;
        background:#dee1e6;
        line-height: 80px;
        text-align: center;
        position: fixed;
        bottom: 0;
    }
</style>