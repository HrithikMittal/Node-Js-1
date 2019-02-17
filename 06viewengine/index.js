var express = require('express');
var path = require('path');
var app = express();

var port = process.env.PORT || 3000;

//MiddleWare
app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "pug");

app.get('/', function (req, res) {
    // res.send('<h1>Hello,Welcome to my world</h1>');
    res.render("index");
});

app.listen(port, function (req, res) {
    console.log(`Server is listening on port:${port}.....`);
});