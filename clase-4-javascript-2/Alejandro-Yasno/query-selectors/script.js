const ELEMENTOS = document.querySelectorAll('.destacado');
ELEMENTOS.forEach(elemento => {
	elemento.style.backgroundColor =  `Yellow`;
});

const enlacesMenu = document.querySelectorAll('#menu a');
enlacesMenu.forEach( enlace => {
	enlace.classList.add('activo');
});

const imagen = document.querySelectorAll('img[alt]');
imagen.forEach( img => {
	img.style.border = "3px solid blue"
});

const ElementosLi = document.querySelectorAll('.tareas li:nth-child(odd)');
ElementosLi.forEach( li => {
	li.style.fontWeight = "bold"  });