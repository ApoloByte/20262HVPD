// --- ejercicio a ---
let elemento= document.getElementById("mi-elemento");
console.log(elemento);

//ii
elemento.innerHTML= "Hola Mundooo!!!";
console.log(elemento); 

//iii
elemento.style.color="blue"

// --- ejercicio b (ii) ---
let miClase= document.getElementsByClassName("mi-clase");
for (var i=0; i < miClase.length; i++){
    miClase[i].innerHTML="Hola, mundo!"
}

// iii
for (var i=0; i < miClase.length; i++){
    miClase[i].style.color="green";
}

console.log(miClase);
