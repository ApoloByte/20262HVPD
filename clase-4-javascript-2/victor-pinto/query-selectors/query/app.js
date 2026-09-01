const ELEMENTOS = document.querySelectorAll('.destacado');

ELEMENTOS.forEach(elemento => {
    elemento.style.backgroundColor = "yellow";
    elemento.style.border = "8px solid #ffa263;";
});
<<<<<<< HEAD
=======

const LINK_ELEMENTS = document.querySelectorAll("#menu a");

LINK_ELEMENTS.forEach(elemento => {
    elemento.classList.add('activo');
});

const IMG_ELEMENTS = document.querySelectorAll("img[alt]");

IMG_ELEMENTS.forEach(elemento => {
    elemento.style.border = "3px solid blue";
});


const LI_ELEMENTS = document.querySelectorAll(".tareas li:nth-child(odd)");

LI_ELEMENTS.forEach(elemento => {
    elemento.style.fontWeight = "bold";
    elemento.style.color = "red";
});


function inputSelectorUncheck(){
    const LI_ELEMENTS = document.querySelectorAll('input[type="checkbox"]:checked');
    
    LI_ELEMENTS.forEach(elemento => {
        elemento.checked=false;
    });
}

>>>>>>> d8a6da079a0a2d26f919aa5f7e5e20ee56a3b511
