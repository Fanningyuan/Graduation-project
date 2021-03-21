const express = require('express');
const connection = require('./connect/index');
const app = express();
const fs = require("fs");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.post('/', (req, res) => {
    let sql = "SELECT * FROM music WHERE m_id = '" + req.body.musicid + "'";
  connection.query(sql,(err,results)=>{
    if(err){
        console.log(err.message)
    }
    let readerStream = fs.createReadStream(''+results[0].m_dirname);
    readerStream.pipe(res)
  })
});
module.exports = app;
