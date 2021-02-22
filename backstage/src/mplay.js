const express = require('express');
const connection = require('./connect/index');
const app = express();
const fs = require("fs");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

function strToBinary(str){
    var result = [];
    var list = str.split("");
    for(var i=0;i<list.length;i++){
        if(i !== 0){
            result.push(" ");
        }
        var item = list[i];
        var binaryStr = item.charCodeAt().toString(2);
        result.push(binaryStr);
    }
    return result.join("");
}
app.post('/', (req, res) => {
    let data = '';
    let sql = "SELECT * FROM music WHERE m_id = '" + req.body.musicid + "'";
  connection.query(sql,(err,results)=>{
    if(err){
        console.log(err.message)
    }
    let readerStream = fs.createReadStream(''+results[0].m_dirname);
    readerStream.setEncoding('UTF8');
    readerStream.on('data',(chunk)=>{
        data += chunk;
    })
    readerStream.on('end',()=>{
        console.log(strToBinary(data))
        res.send(strToBinary(data));
    })
  })
});
module.exports = app;
