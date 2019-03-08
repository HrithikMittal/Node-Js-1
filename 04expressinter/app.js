var express = require('express');
var app = express();

// Middleware one
var myconsolelog = function (req, res, next) {
    console.log('I am a MIDDLEWARE');
    next();
};

// Middleware second
var servertime = function (req, res, next) {
    console.log('I am 2nd middleware');
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


// with the different format of consoling to the port
app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
});
