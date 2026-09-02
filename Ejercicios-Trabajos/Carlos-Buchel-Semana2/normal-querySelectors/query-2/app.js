let contador = 0;

let listaTareas=document.querySelector("#lista-tareas");
let boton=document.querySelector("#agregar-tarea");

boton.addEventListener("click",function() {

    contador++;
    let tarea=document.createElement("li");
    tarea.textContent="Tarea "+contador;
    let lista=listaTareas.querySelector("ul");

    if (lista===null) {
        lista=document.createElement("ul");
        listaTareas.appendChild(lista);
    }
    lista.appendChild(tarea);
});