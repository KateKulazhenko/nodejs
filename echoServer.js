const http = require('http');
const url = require('url');

const server = new http.Server(function(req, res){
    //console.log(req.headers);
    const urlParsed = url.parse(req.url, true);
    if (urlParsed.pathname === '/echo' && urlParsed.query.message) {
        res.setHeader('Cache-control', 'no-cache', 'no-store');
        res.statusCode = 200 //OK
        res.end(urlParsed.query.message)
    } else {
        res.statusCode = 404; // Not found
        res.end('Page not found');
    }
});

server.listen(1337, '127.0.0.1');