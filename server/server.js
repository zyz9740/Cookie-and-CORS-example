var http = require('http');

console.log("Running server on 8080 port.")

http.createServer(function(req, res){
    console.log("A request is received")
    if(req.method === 'GET') {
        res.writeHead(200, {
            "Access-Control-Allow-Origin": "http://localhost:3000",
        });
        res.end()
    } else {
        res.writeHead(404);
        res.end()
    }
}).listen(8080);
