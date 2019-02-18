var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

var db = require("./setup/myurl").mongoURL;
var auth = require("./routes/api/auth");
var profile = require('./routes/api/profile');
var ques = require('./routes/api/questions');

var port = process.env.PORT || 3000;

var app = express();

// Middle ware for body parser
app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(bodyparser.json());

// Connection to mongodb
mongoose
    .connect(db)
    .then(function () {
        console.log("MongoDB connected Successfully");
    })
    .catch(function (err) {
        console.log(err);
    });


// route just for testing -> route
app.get('/', function (req, res) {
    res.send("Hi Welcome to the Application");
});


// acutual route
app.use('/api/auth', auth);
app.use('/api/profile', profile);
appp.use('/api/question', ques);




app.listen(port, function () {
    console.log(`Server is listenining on the port ${port}`);
});