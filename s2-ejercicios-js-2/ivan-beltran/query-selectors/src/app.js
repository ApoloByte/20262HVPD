const elementosDestacados = document.querySelectorAll(".destacado");

for (const elemento of elementosDestacados) {
    elemento.style.backgroundColor = "yellow";
}

const enlacesDelMenu = document.querySelectorAll("#menu a");

for (const enlace of enlacesDelMenu) {
    enlace.classList.add("activo");
}
