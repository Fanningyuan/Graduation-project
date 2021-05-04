const express = require('express');
const connection = require('./connect/index');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))



var selsql = 'SELECT * FROM user';
var isregister = false;
var db = '';

app.post('/',(req,res)=>{
    connection.query(selsql,(err,results)=>{
        if(err){
            console.log(err.message);
            return;
        }
        isregister = true;
        for(let i =0;i<results.length;i++){
            if(results[i].id === req.body.phone){
                isregister = false;
                break;
            }
        }
        if(isregister){
            db = {state: 200, message: '注册成功', content: isregister };
            console.log(req.body.username)
            connection.query("INSERT INTO user(user_name,pass_word,id) values('"+req.body.username+"','"+req.body.password+"','"+req.body.phone+"')")
            res.send(db);
        }else{
            db = { state: 200, message: '注册失败', content: isregister };
            res.send(db);
        }
    })
})
module.exports = app;
