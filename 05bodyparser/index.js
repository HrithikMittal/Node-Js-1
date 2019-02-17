var express = require('express');
var app = express();
var bodyparser = require('body-parser');

var port = process.env.PORT || 3000;

// Middleware
app.use(bodyparser.urlencoded({
    extended: false
}));

// Middleware 
app.use('/login', express.static(__dirname + "/public"));

app.get('/', function (req, res) {
    res.send('Hello I am Adhikansh Mittal </br> Welcome to my application');
});

app.post('/login', function (req, res) {
    console.log(req.body);
    //do some databse process 
    res.redirect("/");
});

app.listen(port, function (req, res) {
    console.log(`Server is running on port : ${port}`);
});