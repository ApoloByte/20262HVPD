     const ELEMENTOS = document.querySelectorAll('.destacado');

     ELEMENTOS.forEach(elemento => {
      elemento.style.backgroundColor = 'yellow';
      elemento.style.border = 'yellow';
     });

     const LINK_ELEMENTS = document.querySelectorAll('#menu a');

     LINK_ELEMENTS.forEach(elemento => {
       elemento.classList.add('activo')
     });
     
     /*let enlaces = document.querySelectorAll('#menu a');
     enlaces.forEach(function(elemento) {
        elemento.classList.add('activo');
     });*/

     let imagenes = document.querySelectorAll('img[alt]');
      imagenes.forEach(function(imagen){
        imagen.style.border = "3px solid blue";
     });
     let itemsImpares = document.querySelectorAll('.tareas li:nth-child(odd)');
     console.log('Encontrados:', itemsImpares.length);
     itemsImpares.forEach(function(li){
         li.style.fontWeight = "bold";
     });
     function desmarcarCheckboxes() {
    let marcados = document.querySelectorAll('input[type="checkbox"]:checked');
    marcados.forEach(function(checkbox) {
        checkbox.checked = false;
    });
}

// Uso:
   document.getElementById('ejercicio5').addEventListener('click', desmarcarCheckboxes);