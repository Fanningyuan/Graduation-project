const express = require('express');
const connection = require('./connect/index');
const router = express.Router();

router.post('/like',(req,res)=>{
    let data = '';
    req.on('data',(chunk)=>{
        data += chunk
    })
    
})