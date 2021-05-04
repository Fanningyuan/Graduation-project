const express = require('express');
const connection = require('./connect/index');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.post('/', (req, res) => {
    let sql = "SELECT * FROM music WHERE m_name like '%" + req.body.search + "%'";
    connection.query(sql,(err,results)=>{
        if(err){
            console.log(err.message)
            return
        }
        if(results.length === 0){
            res.send('无搜索结果')
        }else{
            res.send(results)
        }
        
    })
});
module.exports = app;
