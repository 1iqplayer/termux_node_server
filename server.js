var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){
    if(req.url == '/style.css'){
        fs.readFile('style.css', function(err, data){
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
            return res.end();
        });
    }else{
        fs.readFile('index.html', function(err, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            if (err) throw err;
            res.write(data);
            return res.end();
        });
    }
}).listen(8081);