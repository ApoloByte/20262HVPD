const elementos = document.querySelectorAll('.destacado');
elementos.forEach(elemento => {
    elemento.style.backgroundColor = 'yellow';
});


const ENLACESMENU = document.querySelectorAll('#menu a');
ENLACESMENU.forEach(enlace => {
    enlace.classList.add('activo');
});

const imagenesConAlt = document.querySelectorAll('img[alt]');
imagenesConAlt.forEach(img => {
    img.style.border = '3px solid blue'
})



