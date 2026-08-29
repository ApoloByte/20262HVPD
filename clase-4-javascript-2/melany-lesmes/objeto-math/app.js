function generarNumeroAleatorio(){
    const MOSTRAR_P = document.getElementById("numero-aleatorio");

    const NUMERO_ALEATORIO = Math.random() * 10 ;
    MOSTRAR_P.innerHTML = NUMERO_ALEATORIO;

}

function generarNumeroAleatorioEntero(){
    const MOSTRAR_P = document.getElementById("numero-entero");
    //Se coloca floor para redondear abajo del decimal o hacia abajo
    const NUMERO_ALEATORIO = Math.floor(Math.random() * 10 )+1;
    MOSTRAR_P.innerHTML = NUMERO_ALEATORIO;

}

function generarNumeroAleatorioRango(min,max){
    const MOSTRAR_P = document.getElementById("numero-rango");
    // +min para que el número de inicio sea 5
    const NUMERO_MIN_MAX = Math.floor(Math.random() * (max - min + 1)) + min;
    MOSTRAR_P.innerHTML = NUMERO_MIN_MAX;
}