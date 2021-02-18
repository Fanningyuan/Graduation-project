var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'graduation'
})
connection.connect();
// connection.query('insert into user values(2,"xuguangye",123456,1)',function(err,res){
//     if(err){
//         console.log('err',err.message);
//         return;
//     }
//     console.log('res',res)
// });
exports.module = connection;