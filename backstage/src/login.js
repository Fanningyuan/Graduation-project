const express = require('express');
const connection = require('./connect/index');
const bodyParser = require('body-parser');
const app = express();


var sql = 'SELECT * FROM user'
var db = '';
app.use(bodyParser.urlencoded({extended:false}))
app.post('/',(req,res)=>{
    var isLogin = false;
    connection.query(sql,(err,results)=>{
        if(err){
            console.log(err.message);
            return;
        }
        console.log(req.body.username);
        console.log(req.body.password);
        for(let i = 0;i<results.length;i++){
            
            if(results[i].user_name == req.body.username && results[i].pass_word == req.body.password){
                isLogin = true;
                console.log(results[i].user_name);
                console.log(results[i].pass_word);
                console.log(isLogin);
                break;
            }
        }
        if(!isLogin){
            db = { state: 200, message: '登陆失败', content: isLogin }
        }else{
            db = { state: 200, message: '登陆成功', content: isLogin };
        }
        res.send(db); 
    })
    
})
module.exports = app;