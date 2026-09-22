let contador = 0;

document.getElementById('agregar-tarea').addEventListener('click', () => {
    contador++;

    const contenedor = document.getElementById('lista-tareas');

    let lista = contenedor.querySelector('ul');
    if (!lista) {
        lista = document.createElement('ul');
        contenedor.appendChild(lista);
    }
    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = `Tarea ${contador}`;
    lista.appendChild( nuevoItem );
});