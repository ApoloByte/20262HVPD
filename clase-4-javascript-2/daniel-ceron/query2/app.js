const contenedor = document.querySelector("#lista-tareas");
const boton = document.querySelector("#btn-agregar");

let contador = 0

boton.addEventListener("click", () =>{
    contador++;
    let lista = contenedor.querySelector("ul")
    if(!lista){
        lista = document.createElement("ul")
        contenedor.appendChild(lista)
    }

    const tarea = document.createElement("li")
    tarea.textContent = `Tarea ${contador}`

    lista.appendChild(tarea)
})