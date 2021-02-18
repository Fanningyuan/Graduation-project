const express = require('express');
var app = express();
const Login = require('./src/login');

app.use('/login',Login);
app.listen(80, () => {
    console.log('web server running at http://127.0.0.1');
})