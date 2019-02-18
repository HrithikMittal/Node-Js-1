var express = require('express');
var bodyparser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;

app.get('/',function(req,res){
    res.send("Hi Welcome to the Application");
});

app.listen(port,function(){
    console.log(`Server is listenining on the port ${port}`);
});