var http = require("http"),
    fs = require("fs");

http.createServer(function(req, res){
fs.readFile("../index.html", function(err, html){
    console.log("La sincronizacion se ha realizado con exito");
    res.writeHeader(200, {"Content-Type":"text/html"});
    res.write(html);
    res.end();
});
}).listen(8080)

