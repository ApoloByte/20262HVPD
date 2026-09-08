const express = require('express');
const cors = require('cors');
const app = express();

const users = [
	{
		name: "Isabelle",
		age: 20,
		email: "isa.gmail.com"
	},
	{
		name: "Gabriel",
		age: 20,
		email: "gabo.gmail.com"
	},
];



app.use(cors()); // Habilitar CORS para todas las rutas

app.get('/users', (req, res) => {
	res.json(users); // envía la lista al cliente
});
// TODO: CREAR AQUÍ LOS DEMÁS MÉTODOS
app.listen(3000, () => {
	console.log('El servidor está escuchando en el puerto 3000');
});