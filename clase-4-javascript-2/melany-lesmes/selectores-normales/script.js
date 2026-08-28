// --- ejercicio a ---
let elemento= document.getElementById("mi-elemento");
console.log(elemento);

//ii
elemento.innerHTML= "Hola Mundooo!!!";
console.log(elemento); 

//iii
elemento.style.backgroundColor = "blue";

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
//--- ejercicio c (ii) ---
let parrafos= document.getElementsByTagName("p");
for (let i=0; i < parrafos.length; i++){
    parrafos[i].innerHTML="Hola mundo";
}
// iii
for (let i=0; i < parrafos.length; i++){
    parrafos[i].style.backgroundColor="yellow";
    //Borde en el background
    parrafos[i].style.border="1px solid black";
}

console.log(parrafos);