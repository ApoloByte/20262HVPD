const express = require('express');
const cors = require('cors');
const app = express();

const users = [
    {
        name: 'Maria',
        age: 34,
        email: "maria@gmail.com"

    
    },
    {
        name: 'Fercho',
        age: 67,
        email: "fercho@gmail.com"

    }

]

app.use(cors());

app.get('/users', (req, res) => {
	res.json(users); // envía la lista al cliente
});
// TODO: CREAR AQUÍ LOS DEMÁS MÉTODOS
app.listen(3000, () => {
	console.log('El servidor está escuchando en el puerto 3000');
});

