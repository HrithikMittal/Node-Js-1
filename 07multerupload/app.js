var express = require('express');
var ejs = require('ejs');
var multer = require('multer');
var path = require('path');

var app = express();

var port = process.env.PORT || 3000;

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/public/myupload')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
var upload = multer({
    storage: storage,
}).single('myimage');



//set for ejs
app.set('view engine', "ejs");
// static folder
app.use(express.static('./public'));

app.get('/', function (req, res) {
    // res.send("Welcome to uploader");
    res.render("index");
});

app.listen(port, function (req, res) {
    console.log(`Server is running on port:${port}`);
});