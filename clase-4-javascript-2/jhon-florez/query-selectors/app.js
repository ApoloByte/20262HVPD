const destacados = document.querySelectorAll(".destacado");

const botonEjercicio1 = document.querySelector("#ejercicio1");

botonEjercicio1.addEventListener("click", function () {
    destacados.forEach(function (elemento) {
        elemento.classList.add("resaltado");
    });
});
const enlaces = document.querySelectorAll("#menu a");

const botonEjercicio2 = document.querySelector("#ejercicio2");

botonEjercicio2.addEventListener("click", function () {
    enlaces.forEach(function (enlace) {
        enlace.classList.add("activo");
    });
}); 
const imagenes = document.querySelectorAll("img[alt]");

const botonEjercicio3 = document.querySelector("#ejercicio3");

botonEjercicio3.addEventListener("click", function () {
    imagenes.forEach(function (imagen) {
        imagen.style.border = "3px solid blue";
    });
});
const tareasImpares = document.querySelectorAll(".tareas li:nth-child(odd)");

const botonEjercicio4 = document.querySelector("#ejercicio4");

botonEjercicio4.addEventListener("click", function () {
    tareasImpares.forEach(function (tarea) {
        tarea.classList.add("negrita");
    });
});
const botonEjercicio5 = document.querySelector("#ejercicio5");

function desmarcarSeleccionados() {
    const seleccionados = document.querySelectorAll('input[type="checkbox"]:checked');

    seleccionados.forEach(function (checkbox) {
        checkbox.checked = false;
    });
}

botonEjercicio5.addEventListener("click", desmarcarSeleccionados);