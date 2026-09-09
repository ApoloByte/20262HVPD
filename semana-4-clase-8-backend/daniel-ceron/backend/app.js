const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

const app = express();

app.use(cors());
app.use(express.json());


// ====================
// BASE DE DATOS
// ====================

const db = new Database('users.db');

db.prepare(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        age INTEGER NOT NULL,
        email TEXT NOT NULL
    )
`).run();


// ====================
// GET
// ====================

app.get('/users', (req, res) => {

    const users = db.prepare('SELECT * FROM users').all();

    res.json(users);
});


// ====================
// POST
// ====================

app.post('/users', (req, res) => {

    const { name, age, email } = req.body;

    if (!name || !age || !email) {
        return res.status(400).json({
            error: "Los campos name, age y email son obligatorios"
        });
    }

    const result = db.prepare(`
        INSERT INTO users (name, age, email)
        VALUES (?, ?, ?)
    `).run(name, age, email);

    const newUser = db.prepare(`
        SELECT * FROM users WHERE id = ?
    `).get(result.lastInsertRowid);

    res.status(201).json(newUser);
});


// ====================
// PUT
// ====================

app.put('/users/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const { name, age, email } = req.body;

    if (!name || !age || !email) {
        return res.status(400).json({
            error: "Los campos name, age y email son obligatorios"
        });
    }

    const user = db.prepare(`
        SELECT * FROM users WHERE id = ?
    `).get(id);

    if (!user) {
        return res.status(404).json({
            error: "Usuario no encontrado"
        });
    }

    db.prepare(`
        UPDATE users
        SET name = ?, age = ?, email = ?
        WHERE id = ?
    `).run(name, age, email, id);

    const updatedUser = db.prepare(`
        SELECT * FROM users WHERE id = ?
    `).get(id);

    res.json(updatedUser);
});


// ====================
// DELETE
// ====================

app.delete('/users/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const user = db.prepare(`
        SELECT * FROM users WHERE id = ?
    `).get(id);

    if (!user) {
        return res.status(404).json({
            error: "Usuario no encontrado"
        });
    }

    db.prepare(`
        DELETE FROM users WHERE id = ?
    `).run(id);

    res.json({
        message: "Usuario eliminado correctamente"
    });
});


// ====================
// HELLO
// ====================

app.get('/hello/:name', (req, res) => {

    const name = req.params.name;

    res.send(`¡Hola, ${name}!`);
});


// ====================
// SERVIDOR
// ====================

app.listen(3000, () => {
    console.log('El servidor está escuchando en el puerto 3000');
});