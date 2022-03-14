var http = require('http');
var module = require('./my_module');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.write(module.print);
    res.end();
}).listen(8080);