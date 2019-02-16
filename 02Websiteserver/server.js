var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

const mimetypes = {
    'html': 'text/html',
    'css': 'text/css',
    'js': 'text/javascript',
    'png': 'image/png',
    'jpeg': 'image/jpeg',
    'jpg': 'image/jpg'
}

var portname = '127.0.0.1';
var port = '3000';

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('ok');
}).listen(port, portname, () => {
    console.log(`Server is running on server http://${portname}:${port}`);
});