const express = require('express');
const connection = require('./connect/index');
const app = express();


app.get('/',(req,res)=>{
    let sql = 'SELECT * FROM music';
    connection.query(sql,(err,results)=>{
        if(err){
            console.log(err.message);
            return;
        }
        res.send(results)
    })
})
app.get('/hot',(req,res)=>{
    let sql = 'SELECT * FROM music WHERE m_hot = 1'
    connection.query(sql,(err,results)=>{
        if(err){
            console.log(err.message);
            return;
        }
        res.send(results);
    })
})
app.get('/new',(req,res)=>{
    let sql = 'SELECT * FROM music WHERE m_new = 1'
    connection.query(sql,(err,results)=>{
        if(err){
            console.log(err.message);
            return;
        }
        res.send(results);
    })
})
module.exports = app;