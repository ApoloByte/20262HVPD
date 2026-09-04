const elementosDestacados = document.querySelectorAll(".destacado");

for (const elemento of elementosDestacados) {
    elemento.style.backgroundColor = "yellow";
}

const enlacesDelMenu = document.querySelectorAll("#menu a");

for (const enlace of enlacesDelMenu) {
    enlace.classList.add("activo");
}

const imagenesConAlt = document.querySelectorAll("img[alt]");

for (const imagen of imagenesConAlt) {
    imagen.style.border = "3px solid blue";
}

const tareasImpares = document.querySelectorAll(".tareas li:nth-child(odd)");

for (const tarea of tareasImpares) {
    tarea.style.fontWeight = "bold";
}

function desmarcarCheckboxMarcados() {
    const checkboxMarcados = document.querySelectorAll(
        'input[type="checkbox"]:checked'
    );

    for (const checkbox of checkboxMarcados) {
        checkbox.checked = false;
    }
}

document
    .querySelector("#ejercicio5")
    .addEventListener("click", desmarcarCheckboxMarcados);

let numeroDeTarea = 0;

document.querySelector("#agregar-tarea").addEventListener("click", () => {
    const contenedor = document.querySelector("#lista-tareas");
    let lista = contenedor.querySelector("ul");

    if (!lista) {
        lista = document.createElement("ul");
        contenedor.appendChild(lista);
    }

    numeroDeTarea += 1;

    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = `Tarea ${numeroDeTarea}`;
    lista.appendChild(nuevaTarea);
});
