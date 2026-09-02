let boton = document.querySelector("#generar");
let resultado = document.querySelector("#resultado");

boton.addEventListener("click", function() {

    let numero = Math.floor(Math.random() * 11);

    resultado.textContent = numero;
});


// Ejercicio 2

let botonEntero=document.querySelector("#generarEntero");
let resultadoEntero=document.querySelector("#resultadoEntero");

botonEntero.addEventListener("click",function(){

    let numeroEntero= Math.floor(Math.random()*11);
    resultadoEntero.textContent=numeroEntero;
});


// Ejercicio 3

let botonRango=document.querySelector("#generarRango");
let resultadoRango = document.querySelector("#resultadoRango");

botonRango.addEventListener("click", function(){

    let minimo =Number(document.querySelector("#minimo").value);
    let maximo =Number(document.querySelector("#maximo").value);
    let numero =Math.floor(Math.random()*(maximo-minimo+1))+ minimo;
    resultadoRango.textContent=numero;
});


// Ejercicio 4

let botonRedondear=document.querySelector("#redondear");
let resultadoRedondeo=document.querySelector("#resultadoRedondeo");

botonRedondear.addEventListener("click",function(){

    let numero=Number(document.querySelector("#numeroRedondear").value);
    let redondeoNormal=Math.round(numero);
    let redondeoArriba=Math.ceil(numero);
    let redondeoAbajo=Math.floor(numero);

    resultadoRedondeo.textContent =
     "|"+ "Round:"+redondeoNormal+ " | Ceil:"+redondeoArriba+" | Floor:"+redondeoAbajo+"|";
});


// Ejercicio 5

let botonPotencias=document.querySelector("#calcularPotencias");
let resultadoPotencias =document.querySelector("#resultadoPotencias");
botonPotencias.addEventListener("click", function() {

    let potencia1=Math.pow(4,3);
    let potencia2=Math.pow(5,2);
    let potencia3 =Math.pow(5,-2);

    resultadoPotencias.textContent =
       "|"+ "4³ = " + potencia1 +  " | 5² = " + potencia2 +  " | 5⁻² = " + potencia3+"|";
});



// Ejercicio 6

let botonRaices=document.querySelector("#calcularRaices");
let resultadoRaices=document.querySelector("#resultadoRaices");

botonRaices.addEventListener("click", function(){

    let raiz1 =Math.sqrt(9);
    let raiz2 =Math.sqrt(64);
    let raiz3=Math.sqrt(25);


    resultadoRaices.textContent=
    "|"+"√9 = " + raiz1 +    " | √64 = " + raiz2 +  " | √25 = " + raiz3+"|";
});