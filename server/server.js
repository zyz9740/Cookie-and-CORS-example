var http = require('http');
var url = require('url');
var util = require('util');
var querystring = require('querystring');


console.log("Running server on 3000 port.")

http.createServer(function(req, res){
    console.log("A request is received")
    // if(req.method === "GET") {
    //     res.writeHead(200, {
    //         'Content-Type': 'text/plain; charset=utf-8',
    //         'Set-Cookie': "sessionid=9740",
    //         "Access-Control-Allow-Origin": "http://localhost:3001",
    //         "Access-Control-Allow-Credentials": "true"
    //     })
    // }else if(req.method === "POST") {
    //     let post = '';
    //     req.on('data', function(chunk){
    //         post += chunk;
    //     });
    //
    //     req.on('end', function(){
    //         post = querystring.parse(post);
    //         res.writeHead(200, {
    //             'Content-Type': 'text/plain; charset=utf-8',
    //             'Set-Cookie': "sessionid=9740",
    //             "Access-Control-Allow-Origin": "http://localhost:3001",
    //             "Access-Control-Allow-Credentials": "true"
    //         });
    //     });
    //     console.log(post)
    // }else if(req.method === "OPTION"){
    //     res.writeHead(200, {
    //         'Content-Type': 'text/plain; charset=utf-8',
    //         "Access-Control-Allow-Origin": "http://localhost:3001",
    //         "Access-Control-Allow-Credentials": "true"
    //
    //     })
    // }
    let post = '';
    let body = "";
    req.on('data', function(chunk){
        post += chunk;
    });

    req.on('end', function(){
        body = querystring.parse(post);
        res.writeHead(200, {
            'Content-Type': 'text/plain; charset=utf-8',
            'Set-Cookie': "sessionid=9740",
            "Access-Control-Allow-Origin": "http://localhost:3001",
            "Access-Control-Allow-Credentials": "true"
        });
        console.log(body)
        res.end(util.inspect(body));
    });

}).listen(3000);
