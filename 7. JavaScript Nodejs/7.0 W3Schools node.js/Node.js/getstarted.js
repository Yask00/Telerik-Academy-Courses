var http = require('http');
//The syntax for including the HTTP module in your application

http.createServer(function  (req, res) {
    //The http.createServer() method turns your computer into an HTTP server.
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('Hello World!');
    res.end();
}).listen(8080);

//should run node file_name.js