var express = require('express');
var app = express();
var db = require('./db');

var router = express.Router();
var bodyParser = require('body-parser');

var UserController = require('./user/UserController');
var AuthController = require('./auth/AuthController');

app.use('/users', UserController);
app.use('/api/auth', AuthController);

app.use('/', router.get('/', function (req, res) {
    console.log("Serving root request");
    res.status(200).send('Hello World');
}))

module.exports = app;