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

function generarPotenciaUno(base, exponente){
    const MOSTRAR_P = document.getElementById("potencia-1");
    const POTENCIA = Math.pow(base, exponente);
    MOSTRAR_P.innerHTML = "Valor de " + base + " elevado a " + exponente + ": " + POTENCIA
                        + " | Round: " + Math.round(POTENCIA) + " | Floor: " + Math.floor(POTENCIA)
                        + " |Ceil: " + Math.ceil(POTENCIA);
}


function generarPotenciaDos(base, exponente){
    const MOSTRAR_P = document.getElementById("potencia-2");
    const POTENCIA = Math.pow(base, exponente);
    MOSTRAR_P.innerHTML = "Valor de " + base + " elevado a " + exponente + ": " + POTENCIA
                        + " | Round: " + Math.round(POTENCIA) + " | Floor: " + Math.floor(POTENCIA)
                        + " |Ceil: " + Math.ceil(POTENCIA);
}

function generarPotenciaTres(base, exponente){
    const MOSTRAR_P = document.getElementById("potencia-3");
    const POTENCIA = Math.pow(base, exponente);
    MOSTRAR_P.innerHTML = "Valor de " + base + " elevado a " + exponente + ": " + POTENCIA
                        + " | Round: " + Math.round(POTENCIA) + " | Floor: " + Math.floor(POTENCIA)
                        + " |Ceil: " + Math.ceil(POTENCIA);
}

function generarRaizUno(numero) {
    const MOSTRAR_P = document.getElementById("raiz-1");
    const RAIZ = Math.sqrt(numero);

    MOSTRAR_P.innerHTML = "Valor real:" +RAIZ + " | Round: " + Math.round(RAIZ) 
                        + " | Floor: " + Math.floor(RAIZ) + " | Ceil: " + Math.ceil(RAIZ);
}

function generarRaizDos(numero) {
    const MOSTRAR_P = document.getElementById("raiz-2");
    const RAIZ = Math.sqrt(numero);

    MOSTRAR_P.innerHTML = "Valor real:" +RAIZ + " | Round: " + Math.round(RAIZ) 
    + " | Floor: " + Math.floor(RAIZ) + " | Ceil: " + Math.ceil(RAIZ);
}

function generarRaizTres(numero) {
    const MOSTRAR_P = document.getElementById("raiz-3");
    const RAIZ = Math.sqrt(numero);

    MOSTRAR_P.innerHTML = "Valor real:" +RAIZ + " | Round: " + Math.round(RAIZ) 
    + " | Floor: " + Math.floor(RAIZ) + " | Ceil: " + Math.ceil(RAIZ);
}