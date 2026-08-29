const destacados = document.querySelectorAll('.destacado');
destacados.forEach((elemento) => {
    elemento.style.backgroundColor = 'yellow';
});
const boton2 = document.getElementById('ejercicio2');

boton2.addEventListener('click', () => {
    const enlaces = document.querySelectorAll('#menu a');
    enlaces.forEach((enlace) => {
        enlace.classList.add('activo');
    });
});

const boton3 = document.getElementById('ejercicio3');
boton3.addEventListener('click', () => {
    const imagenes = document.querySelectorAll('img[alt]');
    imagenes.forEach((imagen) => {
        imagen.style.border = '3px solid blue';
    });

});
const boton4 = document.getElementById('ejercicio4');

boton4.addEventListener('click', () => {
  const items = document.querySelectorAll('.tareas li');

  items.forEach((li, indice) => {
    const posicion = indice + 1;

    if (posicion % 2 !== 0) {
      li.style.fontWeight = 'bold';
    }
  });
});
function desmarcarCheckboxes() {
  const marcados = document.querySelectorAll('input[type="checkbox"]:checked');

  marcados.forEach((checkbox) => {
    checkbox.checked = false;
  });
}

const boton5 = document.getElementById('ejercicio5');
boton5.addEventListener('click', desmarcarCheckboxes);