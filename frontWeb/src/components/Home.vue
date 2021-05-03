<template>
    <div>
        <div class="one">
            <img style="width:80px;height:80px;border-radius: 22px;overflow:hidden;float:left;margin-left:300px;" src="../assets/0.jpg">
            <router-link style="font-weight:bold" to="/">首页</router-link>
            <router-link to="hot">热门歌曲</router-link>
            <router-link to="new">最新歌单</router-link>
            <router-link to="vip">VIP</router-link>
            <router-link to="mine">我的音乐</router-link>
            <a1>username</a1>   
            <router-link to="login"><a2>退出登录</a2></router-link>
        </div>
        <div class="two">
            <el-carousel :interval="4000" type="card" height="180px">
                <el-carousel-item v-for="(img, item) in imgArray" key="item">
                <img :src="img.url" style="height:180px;width:100%" alt/>
                </el-carousel-item>
            </el-carousel>
            <p style="font-size:20px;font-weight:bold;text-align:center">为您推荐</p>
            <div style="float:left;margin-left:210px;width:1100px;height:300px;">
                <div style="width:200px; float:left">
                    <img src="../assets/1.png">
                    <p style="font-size:16px;font-family:NSimSun">平安夜  |  希望圣诞树/礼物/雪花和你一起到来</p>
                </div>
                <div style="width:200px; float:left;margin-left:20px">
                    <img src="../assets/2.png">
                    <p style="font-size:16px;font-family:NSimSun">韩语  |  圣诞快乐&如礼物般的今夜</p>
                </div>
                <div style="width:200px; float:left;margin-left:20px">
                    <img src="../assets/3.png">
                    <p style="font-size:16px;font-family:NSimSun">圣诞专辑  |  美好与浪漫都会如约而至</p>
                </div>
                <div style="width:200px; float:left;margin-left:20px">
                    <img src="../assets/4.png">
                    <p style="font-size:16px;font-family:NSimSun">世上本无圣诞老人，惊喜都来自爱你的人</p>
                </div>
                <div style="width:200px; float:left;margin-left:20px">
                    <img src="../assets/5.png">
                    <p style="font-size:16px;font-family:NSimSun">柔情圣诞  |  给爱的人最温暖的告白</p>
                </div>
            </div>
        </div>
        <div class="three">
            
            <audio :src="currentSrc" autoplay="" controls="" @ended="nextSong">
            </audio>
        </div>
    </div>
</template>
<script>
    var imgArray =[
        {
            url:"https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/applvyou/part-003886-934.jpg",
        },
        {
            url:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1710852677,1352103825&fm=26&gp=0.jpg",
        },
        {
            url:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4168825307,4139151354&fm=26&gp=0.jpg",
        },
        {
            url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2813440055,1849072238&fm=26&gp=0.jpg",
        }
    ]
    export default {
        data () {
            return {
             imgArray:imgArray
            }
        },
    }
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
        height:5000px;
        padding-top:100px;
    }
    .three{
        width: 100%;
        height: 80px;
        background: #dee1e6;
        line-height: 80px;
        text-align: center;
        position: fixed;
        bottom: 0;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 180px;
        margin: 0;
    }
    
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>