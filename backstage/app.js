const express = require('express');
var app = express();
const Login = require('./src/login');
const Music = require('./src/music');
const Register = require('./src/register');

app.use('/login',Login);
app.use('/home',Music);
app.use('/register',Register)
app.listen(80, () => {
    console.log('web server running at http://127.0.0.1');
})