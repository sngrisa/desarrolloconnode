var http = require("http");
    fs = require ("fs");

http.createServer(function(req, res){
    fs.readFile("./index.html", function(err, html){
        console.log("Conectado al localhost:8080")
        res.writeHead(200, {"Content-Type":"application/json"});
        res.write(JSON.stringify({nombre: "Samuele Griffin", username: "samuele77"}));
        res.end();
    });
}).listen(8080);