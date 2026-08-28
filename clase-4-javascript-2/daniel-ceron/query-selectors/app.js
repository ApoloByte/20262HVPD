let documento = document.getElementsByClassName("destacado")

for (let i = 0; i < documento.length; i++) {
    documento[i].style.backgroundColor = 'yellow';
    documento[i].style.fontWeight = 'bold';
}

let enlaces = document.querySelector("#menu a")
enlaces.classList.add("activo")

console.log(enlaces)
