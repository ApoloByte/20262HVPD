miElemento = document.getElementById("miElemento");
miElemento.style.color = "#2735F5";
miElemento.innerHTML = " Hola Mundo!!!"

let elementos = document.getElementsByClassName("mi-clase");
console.log(elementos);
for (let i = 0; i <elementos.length; i++) {
	elementos[i].innerHTML = 'hola mundo ' + (i + 1);
    elementos[i].style.color = "green";
}

let parrafos = document.getElementsByTagName('p');
console.log(parrafos);
for (let i = 0; i <parrafos.length; i++) {
	parrafos[i].innerHTML = 'hola mundo ' + (i + 1);
}

