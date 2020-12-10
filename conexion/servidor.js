var http = require("http");

var manejador = function(solicitud, respuesta){
    console.log("Estas conectado al servidor");
    respuesta.end("Se termina la conexion con el servidor");
};

var sevidor = http.createServer(manejador);

sevidor.listen(8080);