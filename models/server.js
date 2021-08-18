const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //Middlewares
    this.middlewares();

    //Rutas de mi aplicacion
    this.routes();
  }
  middlewares() {
    //directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.get("/api", (req, res) => {
      res.send("hola mundo");
    });
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
