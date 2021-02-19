const express = require('express');
const connection = require('./connect/index');
const router = express.Router();

var sql = 'SELECT * FROM music';

router.get('/',(req,res)=>{
    connection.query(sql,(err,results)=>{
        if(err){
            console.log(err.message);
            return;
        }
        res.send(results)
    })
})
module.exports = router;