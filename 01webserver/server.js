const http = require('http')

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

var ser = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello World');
})


ser.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});