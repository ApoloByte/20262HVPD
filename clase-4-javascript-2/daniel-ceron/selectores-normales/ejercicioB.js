let elemento = document
                .getElementsByClassName(
                    "mi-clase"
                )
for (var i = 0; i < elemento.length; i++) {
	elemento[i].innerHTML = "Nuevo contenido";
}

var elementos = document.getElementsByClassName("mi-clase");
for (var i = 0; i < elementos.length; i++) {
	elementos[i].style.color = "green";
}
elemento.style.color("green")
console.log(elemento)