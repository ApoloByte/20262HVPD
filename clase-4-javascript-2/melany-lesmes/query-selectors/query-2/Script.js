 //Contador afuera porque dentro de la funcion reinicio en 1
 let contador = 1;
function agregarElemento() {

    //solo se usa # cuando son querySelector, querySelectorAll, getElementById no se usa #
    const LISTA_TAREAS = document.getElementById('lista-tareas');
    //oBTENER si en LISTA_TAREAS existe UL
    let existe_ul= LISTA_TAREAS.querySelector('ul');
     //SI no existe UL, crear UL y agregarlo a LISTA_TAREAS
    if(!existe_ul){
        const AGREGAR_UL = document.createElement('ul');
        LISTA_TAREAS.appendChild(AGREGAR_UL);
    }

    const NUEVO_ITEM = document.createElement('li');
    NUEVO_ITEM.textContent = 'Texto ' + contador;
    //Appenchild agrega un elemento dentro de otro elemento, en este caso dentro de UL
    existe_ul.appendChild(NUEVO_ITEM);
    contador++;

}
