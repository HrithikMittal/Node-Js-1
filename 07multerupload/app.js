var express = require('express');
var ejs = require('ejs');
var multer = require('multer');
var path = require('path');

var app = express();

var port = process.env.PORT || 3000;

// multer settings for refering go to the npm packages
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/myupload')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
var upload = multer({
    storage: storage,
}).single('profilepic');

//set for ejs
app.set('view engine', "ejs");
// static folder
app.use(express.static('./public'));

app.get('/', function (req, res) {
    // res.send("Welcome to uploader");
    res.render("index");
});

//Desc
app.post('/upload', function (req, res) {
    upload(req, res, function (error) {
        if (error) {
            res.render('index', {
                message: error
            });
        } else {
            res.render('index', {
                message: "Successfully upload",
                filename: `myupload/${req.file.filename}`
            });
        }
    });
});

app.listen(port, function (req, res) {
    console.log(`Server is running on port:${port}`);
});
