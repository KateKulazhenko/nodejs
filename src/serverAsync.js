const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    var info;

    if(req.url === '/') {
        fs.readFile('index.html', function(err, info){
            if (err) {
                console.log(err);
                res.statusCode = 500;
                res.end('On the server has some problem');
                return;
            }

            res.end(info);
        })
    } else {
        res.statusCode = 404; // Not found
        res.end('Page not found');
    }
}).listen(3000);