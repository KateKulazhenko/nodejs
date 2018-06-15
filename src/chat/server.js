var http = require('http');
var fs = require('fs');
var chat = require('./chat');

http.createServer(function(req, res) {
    console.log(req.url);
    
    switch (req.url) {
        case '/':
        console.log(1111);
            sendFile('index.html', res);
            break;
        case '/subscribe':
            chat.subscribe(req, res);
            break;
        case '/publish':
            var body = '';

            req
                .on('readable', function() {
                    body += req.read();
                })
                .on('end', function() {
                    body = JSON.parse(body);

                    chat.publish(body.message);
                    res.end('OK');
                })
            break;
        default:
            res.statusCode = 404;
            res.end('Page not found');
    }

}).listen(3000);

function sendFile(fileName, res) {
    var fileStream = fs.createReadStream(fileName);

    fileStream
        .on('error', function() {
            res.statusCode = 500;
            res.end('Server error');
        })
        .pipe(res)
        .on('close', function() {
            fileStream.destroy();
        })
};