
// Punto 1-2-3: Funciones de redondeo - potencias y raíz

const numero = 6.7;

// Usando template literals para interpolación de strings [[16]]
const actualizarContenido = (id, valor) => {
    document.getElementById(id).textContent = valor;
};

actualizarContenido("round", `Round: ${Math.round(numero)}`);
actualizarContenido("ceil", `Ceil: ${Math.ceil(numero)}`);
actualizarContenido("floor", `Floor: ${Math.floor(numero)}`);


