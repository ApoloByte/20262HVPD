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

const IMG_ELEMENTS = document.querySelectorAll('img[alt]');
IMG_ELEMENTS.forEach(elemento => {
    elemento.style.border = "3px solid blue";
});


const LI_ELEMENTS = document.querySelectorAll('.tareas li:nth-child(odd)');
console.log('Encontrados:', LI_ELEMENTS.length);
LI_ELEMENTS.forEach(elemento => {
    elemento.style.fontWeight = "bold";
    elemento.style.color = "red";
});

function inputSelectorUncheck() {
    const marcados = document.querySelectorAll('input[type="checkbox"]:checked');
    marcados.forEach(elemento => {
        elemento.checked = false;
    });
}

// Uso:
