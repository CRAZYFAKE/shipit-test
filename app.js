var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {
        "content-type": "text/plain"
    });
    res.write("Hello NodeJs");
    res.end();
}).listen(5566);