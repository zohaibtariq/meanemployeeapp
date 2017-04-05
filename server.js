var port = 8080;
var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

app.get('/', function (req,res) {
	res.send("Hi dear!");
});

app.get('/home', function (req,res) {
	res.send("Hi dear! It is my home");
});

app.listen(port, function(){
	console.log("server is runing on : http://127.0.0.1:"+port);
});
