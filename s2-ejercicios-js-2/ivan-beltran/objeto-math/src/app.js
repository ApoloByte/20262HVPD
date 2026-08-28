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

document
    .getElementById("calcular-redondeos")
    .addEventListener("click", () => {
        const numero = Number(document.getElementById("numero-redondeo").value);
        const resultado = document.getElementById("resultado-redondeos");

        resultado.textContent =
            `Round: ${Math.round(numero)} | Ceil: ${Math.ceil(numero)} | Floor: ${Math.floor(numero)}`;
    });

document
    .getElementById("calcular-potencias")
    .addEventListener("click", () => {
        const potencias = [
            `4^3 = ${Math.pow(4, 3)}`,
            `5^2 = ${Math.pow(5, 2)}`,
            `5^-2 = ${Math.pow(5, -2)}`,
        ];

        document.getElementById("resultado-potencias").textContent =
            potencias.join(" | ");
    });

document
    .getElementById("calcular-raices")
    .addEventListener("click", () => {
        const raices = [
            `√9 = ${Math.sqrt(9)}`,
            `√64 = ${Math.sqrt(64)}`,
            `√25 = ${Math.sqrt(25)}`,
        ];

        document.getElementById("resultado-raices").textContent =
            raices.join(" | ");
    });