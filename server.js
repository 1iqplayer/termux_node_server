var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    if (q.pathname == '/time'){
        let ts = Date.now();
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('epoch in ms: ' + ts + '\n');
        res.write('epoch in s: ' + Math.floor(ts/1000) + '\n');
        res.end(Date());
    }
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('enter /time');
  }).listen(8080);