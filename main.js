/*
Zihan Liu DoubleDoor Technologies Technical Problem 2
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//I used a router to manage the requests
var things = require('./router.js');

app.use('/list', things);
//Listens on localhost:3000/lists
app.listen(3000);