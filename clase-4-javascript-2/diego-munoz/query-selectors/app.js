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