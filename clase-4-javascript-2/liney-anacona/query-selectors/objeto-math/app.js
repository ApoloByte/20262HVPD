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