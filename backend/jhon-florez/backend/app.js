const express = require("express");   //permite crear servidor 
const db = require("./database");       //conecta base dde datos
const app = express();

app.use(express.json());            //permite que el servidor entienda datos enviados en formato JSON.




app.get("/objetos", (req, res) => {                 //Trae todos los objetos de la tabla//consultar 
    const objetos = db.prepare("SELECT * FROM objetos").all();

    res.json(objetos);      //Este endpoint permite consultar todos los objetos almacenados en SQLite
});

app.get("/objetos/estado/:estado", (req, res) => {      //permite buscar enre objetos perdidos y enconatrasdo 
    const estado = req.params.estado;

    const objetos = db.prepare(
        "SELECT * FROM objetos WHERE estado = ?"
    ).all(estado);

    res.json(objetos);
});
  
  app.post("/objetos", (req, res) => {          //Aquí recibimos los datos enviados por el usuario.//crear
    const { nombre, descripcion, lugar, estado } = req.body;

    if (!nombre || !descripcion || !lugar || !estado) {    //validacion para evitar regisstros incomplet
        return res.status(400).json({
            mensaje: "Nombre, descripción, lugar y estado son obligatorios"
        });
    }

    const resultado = db.prepare(`          //es la que guarda el objeto en SQLite.
        INSERT INTO objetos (nombre, descripcion, lugar, estado)
        VALUES (?, ?, ?, ?)
    `).run(nombre, descripcion, lugar, estado);

    const nuevoObjeto = db.prepare(`
        SELECT * FROM objetos WHERE id = ?
    `).get(resultado.lastInsertRowid);

    res.status(201).json(nuevoObjeto);
});

   
   app.put("/objetos/:id", (req, res) => {          //actualizar
    const id = parseInt(req.params.id);
    const { nombre, descripcion, lugar } = req.body;

    if (!nombre || !descripcion || !lugar) {
        return res.status(400).json({
            mensaje: "Nombre, descripción y lugar son obligatorios"
        });
    }

    const objeto = db.prepare(
        "SELECT * FROM objetos WHERE id = ?"
    ).get(id);

    if (!objeto) {
        return res.status(404).json({
            mensaje: "Objeto no encontrado"
        });
    }

    db.prepare(`
        UPDATE objetos
        SET nombre = ?, descripcion = ?, lugar = ?
        WHERE id = ?
    `).run(nombre, descripcion, lugar, id);

    const objetoActualizado = db.prepare(
        "SELECT * FROM objetos WHERE id = ?"
    ).get(id);

    res.json(objetoActualizado);
});

app.delete("/objetos/:id", (req, res) => {          //eliminar 
    const id = parseInt(req.params.id);

    const objeto = db.prepare(
        "SELECT * FROM objetos WHERE id = ?"
    ).get(id);

    if (!objeto) {
        return res.status(404).json({
            mensaje: "Objeto no encontrado"
        });
    }

    db.prepare(
        "DELETE FROM objetos WHERE id = ?"
    ).run(id);

    res.json({
        mensaje: "Objeto eliminado correctamente",
        objeto: objeto
    });
});

app.get("/hello/:nombre", (req, res) => {   //permite recibir un nombre directamente desde la URL.
    const nombre = req.params.nombre;

    res.send(`¡Hola, ${nombre}!`);
});

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("API de objetos perdidos funcionando");
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});