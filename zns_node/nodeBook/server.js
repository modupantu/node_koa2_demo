const http = require('http');
// http.createServer(function (request,response) {
//     response.writeHead(200,{'content-Type':'text/plain'});
//     response.write('hello world');
//     response.end();
//
// }).listen(8888)

function start() {

    function onRequest(req,res) {
        console.log('r1111s');
        res.writeHead(200,{'content-Type':'text/plain'});
        res.write('hello world');
        res.end();
    }
    http.createServer(onRequest).listen(8888)
    console.log('2222')
}
exports.start=start