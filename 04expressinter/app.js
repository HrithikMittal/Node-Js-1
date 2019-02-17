var express = require('express');
var app = express();

// Middleware one
var myconsolelog = function (req, res, next) {
    console.log('I am a MIDDLEWARE');
    next();
};

// Middleware second
var servertime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
};

app.use(servertime);
app.use(myconsolelog);

port = process.env.PORT || 3000;
app.get('/', function (req, res) {
    res.send("<h1>Hi! I am Adhikansh</h1>" + "and time is :" + req.requestTime);
    console.log("Hello world from /");
});



app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
});