const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.json({
        message: "Hello World"
    });
});

app.get('/about', function (req, res) {
    res.send("<h1>I am Adhikansh Mittal</h1>");
});

app.get('/contact', function (req, res) {
    res.send("<ul><li>8077510286</li><li>adhikanshmittal@gmail.com</li><li>440 Q block</li></ul>")
})

port = process.env.PORT || 3000;
app.listen(port, function (req, res) {
    console.log(`Server is running on the port ${port}....`);
});