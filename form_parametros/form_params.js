var http = require("http");
var fs = require("fs");
var parse= require("./modulos/parse.js");
//Variable que convoca los metodos de parse y de render
var p = parse.parse;
var render = require("./modulos/render.js");
var s = render.render;

http.createServer(function(req,res){
    if(req.url.indexOf("favicon.ico") > 0){
        return;
    }

    fs.readFile("./param.html", function(err,html){
      //Traspazo de valores entre variables
        var parametro2=p(req);
        var parametro=s(html,parametro2);
        //Escritura en el Html
        res.writeHead(200, {"Content-Type":"text/html"});
        res.write(parametro,parametro2);
        res.end();
    })
}).listen(8080);