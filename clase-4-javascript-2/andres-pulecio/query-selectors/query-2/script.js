let contador = 0;
document.getElementById('btnAgregar').addEventListener('click', function(){
    contador++;

    let contenedor = document.getElementById('lista-tareas');
    let lista = contenedor.querySelector('ul');

    //1. crear el nuevo <li> con el texto "Tarea X"
    let nuevoItem = document.createElement('li');
    nuevoItem.textContent = "Tarea " + contador;
    //2. Si aun no existe el <ul>, hay q crearlo
    if(!lista){
        lista = document.createElement('ul');
        contenedor.appendChild(lista);
    } 
    //3. Lo anadimos al <ul> con appendChild
    lista.appendChild(nuevoItem);
});

let contadorChevecha = 0;

document.getElementById('btnAgregarChevecha').addEventListener('click', function(){
    contadorChevecha++;

    let contenedorChevecha = document.getElementById('lista-polas');
    let listaChevecha = contenedorChevecha.querySelector('ul');

    //1. crear el nuevo <li> con el texto "Chevecha X"
    let nuevoItem = document.createElement('li');
    nuevoItem.textContent = "Chevecha " + contadorChevecha;
    //2. Si aun no existe el <ul>, hay q crearlo
    if(!listaChevecha){
        listaChevecha = document.createElement('ul');
        contenedorChevecha.appendChild(listaChevecha);
    } 
    //3. Lo anadimos al <ul> con appendChild
    listaChevecha.appendChild(nuevoItem);
});