var express = require('express');
var ejs = require('ejs');
var multer = require('multer');
var path = require('path');

var app = express();

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send("Welcome to uploader");
});

app.listen(port, function (req, res) {
    console.log(`Server is running on port:${port}`);
});