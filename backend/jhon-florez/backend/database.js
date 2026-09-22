const Database = require("better-sqlite3");         //estos crea la base de datos 

const db = new Database("objetos.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS objetos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        descripcion TEXT NOT NULL,
        lugar TEXT NOT NULL
    )
`);

try {
    db.exec(`
        ALTER TABLE objetos
        ADD COLUMN estado TEXT NOT NULL DEFAULT 'perdido'
    `);
} catch (error) {
    // La columna ya existe
}

module.exports = db;