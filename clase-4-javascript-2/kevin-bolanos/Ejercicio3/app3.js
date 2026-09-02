
const calcularPotencia = (base, exponente, id) => {
    document.getElementById(id).textContent = base ** exponente;
};

calcularPotencia(4, 3, "potencia1");
calcularPotencia(5, 2, "potencia2");
calcularPotencia(5, -2, "potencia3");


