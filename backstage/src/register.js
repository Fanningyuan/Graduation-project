const express = require('express');
const connection = require('./connect/index');
const router = express.Router();

var selsql = 'SELECT * FROM user';
var isregister = false;
var db = '';

router.post('/register',(req,res)=>{
    let data = '';
    req.on('data',(chunk)=>{
        data += chunk;
    });
    req.on('end',()=>{
        data = JSON.parse(data);
        var arr = [];
        for(let i in data){
            arr.push(data[i])
        }
        connection.query(selsql,(err,results)=>{
            if(err){
                console.log(err.message);
                return;
            }
            isregister = true;
            for(let i =0;i<results.rows.length;i++){
                if(results.rows[i].user_name === data.username){
                    isregister = false;
                    break;
                }
            }
            if(isregister){
                db = {state: 200, message: '注册成功', content: isregister };
                connection.query('insert into user(user_name,password) values($1,$2)',arr) 
                res.send(db);
            }else{
                db = { state: 200, message: '注册失败', content: isregister }; 
                res.send(db);
            }
        })
    })
})