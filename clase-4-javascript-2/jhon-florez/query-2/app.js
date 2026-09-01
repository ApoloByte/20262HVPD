const contenedor = document.querySelector("#lista-tareas");
const boton = document.querySelector("#agregar-tarea");

let numeroTarea = 0;

boton.addEventListener("click", function () {
    numeroTarea++;

    let lista = contenedor.querySelector("ul");

    if (!lista) {
        lista = document.createElement("ul");
        contenedor.appendChild(lista);
    }

    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = `Tarea ${numeroTarea}`;

    lista.appendChild(nuevaTarea);
});