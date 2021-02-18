const express = require('express');
const connection = require('./connect/index');
const router = express.Router();

var isLogin = false;
var sql = 'SELECT * FROM user'
var db = '';

router.post('/',(req,res)=>{
    let user = {
        userName:'',
        passWord:''
    }
    let data = '';
    req.on('data',(chunk)=>{
        console.log('1111111',chunk);
        data += chunk;
    });
    req.on('end',()=>{
        data = data.split('&');
        for(let i = 0;i < data.length;i++){
            data[i]=data[i].split('=');
            user[data[i][0]] = data[i][0];
        }
        console.log(user);
        connection.query(sql,(err,res)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log(res);
            for(let i = 0;i<res.length;i++){
                if(res[i].user_name === user.userName && res[i].pass_word === user.passWord){
                    isLogin = true;
                    break;
                }
            }
            if(!isLogin){
                db = { state: 200, message: '登陆失败', content: isLogin }
            }else{
                db = { state: 200, message: '登陆成功', content: isLogin };
            }
            
        })
        res.json(db);
    })
    
})
module.exports = router;