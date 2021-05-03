const express = require('express');
const connection = require('./connect/index');
const bodyParser = require('body-parser');
const app = express();


var sql = 'SELECT * FROM user'
var db = '';
app.use(bodyParser.urlencoded({extended:false}))
app.post('/',(req,res)=>{
    var isLogin = false;
    var id = '';
    connection.query(sql,(err,results)=>{
        if(err){
            console.log(err.message);
            return;
        }
        for(let i = 0;i<results.length;i++){
            if(results[i].id == req.body.phone && results[i].pass_word == req.body.password){
                isLogin = true;
                id = results[i].id;
                break;
            }
        }
        if(!isLogin){
            db = { state: 200, message: '登陆失败', content: isLogin, id: id };
        }else{
            db = { state: 200, message: '登陆成功', content: isLogin, id: id };
        }
        res.send(db);
    })

})
module.exports = app;
