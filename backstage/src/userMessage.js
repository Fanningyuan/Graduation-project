const express = require('express');
const connection = require('./connect/index');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.post('/', (req, res) => {
    let sql = "SELECT * FROM user WHERE id = '" + req.body.userid + "'";
  connection.query(sql,(err,results)=>{
    if(err){
        console.log(err.message)
        return
    }
    results.foreach((data) => {
        if( data.id = req.body.userid) {
            res.send(results)
        }
    })
  })
});
module.exports = app;
