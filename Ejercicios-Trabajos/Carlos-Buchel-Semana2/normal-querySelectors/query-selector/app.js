//Ejercicio1
let destacados = document.querySelectorAll(".destacado");

for (let i=0;i<destacados.length; i++){
    destacados[i].style.backgroundColor="yellow";
}



//ejercicio2

let enlaces=document.querySelectorAll("#menu a");

for (let i=0;i<enlaces.length; i++){
    enlaces[i].classList.add("activo");
}


// Ejercicio 3
let imagenes=document.querySelectorAll("img[alt]");

for (let i=0;i<imagenes.length; i++){
    imagenes[i].style.border="3px solid blue";

}

// Ejercicio 4
let tareasImpares =document.querySelectorAll(".tareas li:nth-child(odd)");

for (let i=0;i<tareasImpares.length; i++){
    tareasImpares[i].classList.add("negrita");
}


// Ejercicio 5
function desmarcarSeleccionados() {
    let seleccionados = document.querySelectorAll('input[type="checkbox"]:checked');

    for(let i = 0;i<seleccionados.length; i++){
        seleccionados[i].checked=false;
    }
}

let boton5=document.querySelector("#ejercicio5");
boton5.addEventListener("click",desmarcarSeleccionados);


