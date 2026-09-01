let documento = document.getElementsByTagName('p');

for (let i = 0; i < documento.length; i++) {
    documento[i].innerHTML = 'Hola Mundo';
}

for (let i = 0; i < documento.length; i++) {
    documento[i].style.backgroundColor = 'yellow';
    documento[i].style.fontWeight = 'bold';
}

console.log(documento);
