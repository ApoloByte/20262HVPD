let mensaje = document.getElementById("mensaje");

mensaje.innerHTML = "Este texto fue modificado con javaScript";


let textos = document.getElementsByClassName("texto");

for (let i = 0; i < textos.length; i++) {
    textos[i].innerHTML="Mensaje modificado"+(i+1);
    
}




let contenedor = document.getElementById("ejercicio3");
let parrafos = contenedor.getElementsByTagName("p");

for (let x = 0; x < parrafos.length; x++) {
    parrafos[x].innerHTML = "Párrafo modificado"+(x+1);
       
}


let mensaje4 = document.querySelector("#ejercicio4 .mensaje");

mensaje4.innerHTML = "Este mensaje fue modificado con querySelector()";



let mensaje5 =document.querySelectorAll("#ejercicio5 .mensaje5");

mensaje5.forEach((mensaje, indice)=>{
    mensaje.innerHTML = "mensaje modificado" + (indice+1);
});





let contenedor6 = document.getElementById("ejercicio6");

let parrafo6 = document.createElement("p");

parrafo6.textContent = "Este párrafo fue creado con javaScript";

contenedor6.appendChild(parrafo6);






let contenedor7 = document.getElementById("ejercicio7");

let parrafo7 = document.createElement("p");

let texto7 = document.createTextNode("Este texto fue creado con createTextNode()");

parrafo7.appendChild(texto7);

contenedor7.appendChild(parrafo7);




let texto8 = document.getElementById("estilo8");

texto8.style.color = "red";
texto8.style.fontSize = "25px";
texto8.style.fontWeight = "bold";
