miElemento =document.getElementById("mi-elemento");
miElemento.style.color = "#002B5B";
miElemento.innerHTML = " HOLA MUNDO!!! "

let elementos = document.getElementsByClassName('mi-clase');
console.log(elementos);
elementos[0].style.color = "green";
elementos[0].innerHTML = "Hola mundo!"
elementos[1].style.color = "green";
elementos[1].innerHTML = "Hola mundo!"
elementos[2].style.color = "green";
elementos[2].innerHTML = "Hola mundo!"

let parrafos = document.getElementsByTagName('p');
console.log(parrafos)
for (let i = 0; i <parrafos.length; i++) {
	parrafos[i].innerHTML = 'Hola mundo! ' + (i + 1);
}