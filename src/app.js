const http = require('http');
const server = new http.Server(); //http.Server -> net.Server -> EventEmitter

server.listen(1337, '127.0.0.1');
let counter = 0;
let emit = server.emit;
emit = function(event){
    console.log(event);
    emit.apply(server, arguments);
}
server.on('request', function(req, res){
    res.end('Hello world ' + ++counter);
});