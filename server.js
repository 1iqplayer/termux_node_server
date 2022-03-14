var http = require('http');
var url = require('url');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    let q = url.parse(req.url, true).query;
    var txt = q.imie + ' ' + q.ksywa;
    res.end(txt);
}).listen(8080);