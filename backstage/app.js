const express = require('express');
var app = express();
const Login = require('./src/login');
const Music = require('./src/music');
const Register = require('./src/register');
const Like = require('./src/Ilike');
const Mplay = require('./src/mplay');
app.use('/login',Login);
app.use('/music',Music);
app.use('/register',Register)
app.use('/like',Like);
app.use('/mplay',Mplay);
app.listen(80, () => {
    console.log('web server running at http://127.0.0.1');
})
