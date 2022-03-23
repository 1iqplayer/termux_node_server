var http = require('http');
var url = require('url');
var fs = require('fs');

var timecheckCount = 0;
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var quer = q.query;

    if (q.pathname == '/time'){
        let ts = Date.now();
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end((Math.floor(ts/1000)).toString());
        return;
    }

    if (q.pathname == '/check'){
        let ts = new Date();
        let when = (timecheckCount++).toString() + ". checked at: " +ts.getHours().toString() + ":" + ts.getMinutes().toString() +":" +ts.getSeconds().toString();
        let readings = "  Pressure: " + quer.pressure + "  Temp: " + quer.temp;
        
        fs.appendFile('readings/timestamps.txt', when + readings + '\n', function (err) {
            if (err) {throw err}else{
                res.writeHead(200, {'content-type': 'text/plain'});
                res.end('Checked succesfully!');
            };
            });
        return;
    }

    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('enter /time or /check');
  }).listen(8080);