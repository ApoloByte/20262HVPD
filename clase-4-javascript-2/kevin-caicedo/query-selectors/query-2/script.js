let contadorTareas = 0;

function agregarTarea(){
    contadorTareas++;


    const elemento = document.createElement('li');
    elemento.textContent = "tarea " + contadorTareas;

    const contenedor = document.getElementById('lista-tareas');
    let lista = contenedor.querySelector('ul');

    if(!lista){
        lista = document.createElement('ul');
        contenedor.appendChild(lista);
    }

    lista.appendChild(elemento);


    }