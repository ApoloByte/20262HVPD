const elementos = document.querySelectorAll('.destacado');
elementos.forEach(elemento => {
    elemento.style.backgroundColor = 'yellow';
});


const enlacesMenu = document.querySelectorAll('#menu a');
enlacesMenu.forEach(enlace => {
    enlace.classList.add('activo');
});