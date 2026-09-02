function generarNumeroAleatorio(){
    const parrafo_resultado = document.getElementById("numeroAleatorio");
    const numero_aleatorio = Math.random() * 10;
    parrafo_resultado.innerHTML = numero_aleatorio.toFixed(2);
}

function generarNumeroAleatorioEntero(){
    const parrafo_resultado = document.getElementById("numeroEntero");
    const numero_aleatorio = Math.floor(Math.random() * 10) + 1;
    parrafo_resultado.innerHTML = numero_aleatorio;

}

function generarNumeroAleatorioRango(min,max){
    const parrafo_resultado = document.getElementById("numeroDentroRango");
    const numero_min_max = Math.floor(Math.random() * (max - min + 1)) + min;
    parrafo_resultado.innerHTML = numero_min_max;
}

function generarPotenciaUno(base, exponente){
    const parrafo_resultado = document.getElementById("potenciaUno");
    const potencia = Math.pow(base, exponente);
    parrafo_resultado.innerHTML = base + " elevado a " + exponente + ": " + potencia+ "<br>" +
        "Round: " + Math.round(potencia) + "<br>" +
        "Floor: " + Math.floor(potencia) + "<br>" +
        "Ceil: " + Math.ceil(potencia);
}


function generarPotenciaDos(base, exponente){
    const parrafo_resultado = document.getElementById("potenciaDos");
    const potencia = Math.pow(base, exponente);
    parrafo_resultado.innerHTML = base + " elevado a " + exponente + ": " + potencia+ "<br>" +
        "Round: " + Math.round(potencia) + "<br>" +
        "Floor: " + Math.floor(potencia) + "<br>" +
        "Ceil: " + Math.ceil(potencia);
}

function generarPotenciaTres(base, exponente){
    const parrafo_resultado = document.getElementById("potenciaTres");
    const potencia = Math.pow(base, exponente);
    parrafo_resultado.innerHTML = base + " elevado a " + exponente + ": " + potencia+ "<br>" +
        "Round: " + Math.round(potencia) + "<br>" +
        "Floor: " + Math.floor(potencia) + "<br>" +
        "Ceil: " + Math.ceil(potencia);
}