const express = require('express');
const connection = require('./connect/index');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.post('/Ilike',(req,res)=>{
    let sql = "SELECT * FROM userlike WHERE user_id = '" + req.body.userid + "'";
    connection.query(sql,(err,results)=>{
        if(err){
            console.log(err.message);
            return;
        }
        res.send(results);
    })
    
})
app.post('/addLike',(req,res)=>{
    let sql = "SELECT * FROM userlike WHERE user_id = '" + req.body.userid + "'";
    connection.query(sql,(err,results)=>{
        if(err){
            console.log(err.message);
            return;
        }
        for(let i=0;i<results.length;i++){
            if(results[i].music_id !== req.body.musicid){
                connection.query("INSERT INTO userlike(user_id,music_id) values('"+req.body.userid+"','"+req.body.musicid+"')")
                res.send({state:"200",content:'添加成功',boolen:1})
            }else{
                res.send({state:"000",content:'添加失败',boolen:0})
            }
        }
    })
})
module.exports = app;