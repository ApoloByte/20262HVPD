let contador = 1;
function nuevoitem() {
    const listatareas = document.getElementById('lista-tareas');
    let existe_ul= listatareas.querySelector('ul');
    
    if(!existe_ul){
        const agregarul = document.createElement('ul');
        listatareas.appendChild(agregarul);
    }

    const nuevo = document.createElement('li');
    nuevo.textContent = 'Tarea ' + contador;
    existe_ul.appendChild(nuevo);
    contador++;
}