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
};

var portname = '127.0.0.1';
var port = '3000';

http.createServer((req, res) => {
    var myuri = url.parse(req.url).pathname;
    var filename = path.join(process.cwd(), unescape(myuri));
    console.log('File you are looking for is:' + filename);

    var loadFile;
    try {
        loadFile = fs.lstatSync(filename);
    } catch (error) {

    }
}).listen(port, portname, () => {
    console.log(`Server is running on server http://${portname}:${port}`);
});