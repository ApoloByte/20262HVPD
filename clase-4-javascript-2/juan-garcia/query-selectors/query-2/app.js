const div = document.getElementById('lista-tareas');
const boton = document.getElementById('btn-agregar');

let contador = 0; 
boton.addEventListener('click', function () {
    contador++; 
    const item = document.createElement('li');
    const texto = document.createTextNode('Tarea ' + contador); 
    item.appendChild(texto); 

    let lista = div.querySelector('ul');
    if (!lista) {
        lista = document.createElement('ul');
        div.appendChild(lista);
    }
    lista.appendChild(item);
});