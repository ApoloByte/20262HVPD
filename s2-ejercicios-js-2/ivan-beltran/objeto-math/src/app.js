function generarNumeroAleatorio() {
    return Math.random() * 10;
}

function generarEnteroAleatorio(maximo) {
    return Math.floor(Math.random() * (maximo + 1));
}

function generarEnteroEntre(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

document
    .getElementById("generar-decimal")
    .addEventListener("click", () => {
        document.getElementById("resultado-decimal").textContent =
            ` Resultado: ${generarNumeroAleatorio()}`;
    });

document
    .getElementById("generar-entero")
    .addEventListener("click", () => {
        document.getElementById("resultado-entero").textContent =
            ` Resultado: ${generarEnteroAleatorio(10)}`;
    });

document
    .getElementById("generar-rango")
    .addEventListener("click", () => {
        const minimo = Number(document.getElementById("minimo").value);
        const maximo = Number(document.getElementById("maximo").value);
        const resultado = document.getElementById("resultado-rango");

        if (minimo > maximo) {
            resultado.textContent = " El mínimo no puede ser mayor que el máximo.";
            return;
        }

        resultado.textContent = ` Resultado: ${generarEnteroEntre(minimo, maximo)}`;
    });