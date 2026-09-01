let documento = document.getElementsByClassName("destacado");

for (let i = 0; i < documento.length; i++) {
    documento[i].style.backgroundColor = "yellow";
    documento[i].style.fontWeight = "bold";
}

let enlaces = document.querySelectorAll("#menu a");

enlaces.forEach(enlace => {
    enlace.classList.add("activo");
});

const img_element = document.querySelectorAll("img[alt]");

img_element.forEach(img => {
    img.style.border = "8px solid blue";
});

const LI_ELEMENTS = document.querySelectorAll(".tareas")
LI_ELEMENTS.forEach(documento => {
    documento.style.fontWeight = "bold"
    documento.style.color = "purple"
})

function inputSelectorUncheck(){
    const LI_ELEMENTS = document.querySelectorAll("input[type='checkbox']:checked")
    LI_ELEMENTS.forEach(documento => {
        documento.checked = false
    })
}