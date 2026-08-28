const ELEMENTOS = document.querySelectorAll('.destacado');

ELEMENTOS.forEach(elemento =>{

    elemento.style.backgroundColor = "yellow";
    

});


const linkElement = document.querySelectorAll("#menu a");


LINK_ELEMENTS.forEach(elemento =>{

    elemento.classList.add('activo');


})



const IMG_ELEMENTS = document.querySelectorAll("#img[alt]");


LINK_ELEMENTS.forEach(elemento =>{

    elemento.style.border ='3px solid blue';


})


const LI_ELEMENTS = document.querySelectorAll(".tareas li:nth-child(2n)");


LINK_ELEMENTS.forEach(elemento =>{

    elemento.style.fontWeigth ="bold";
    elemento.style.fontWeigth ="red";


})