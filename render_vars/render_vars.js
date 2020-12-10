var http = require("http");
    fs = require("fs");

http.createServer(function(req,res){
    fs.readFile("../index.html", function(err,html){
        //Convierte un html en string
        var html_string = html.toString();
        //Uso de expresiones regulares para encontrar los distintos simbolos en este caso las dos llaves {}
        var variables = html_string.match(/[^\{\}]+(?=\})/g);
        //Variable comun y corriente con su valor, tipo string
        //variable ['nombre']
        var nombre = "Gifmania";
        //Uso de bucle de repeticion para remplezar todas las variables con su respectivo contenido
        for(var i = variables.length -1; i>=0;i--){

            //Lo ejecutamos como valor de javascript
            var value = eval(variables[i]);
            //Reemplazar el contenido con llaves con su valor correspondiente
            html_string = html_string.replace("{"+variables[0]+"}",value);
            //Ejemplo {nombre}, "Gifmania"
        };

        res.writeHead(200, {"Content-Type":"text/html"});
        res.write(html_string);
        res.end();
    })
}).listen(8080);