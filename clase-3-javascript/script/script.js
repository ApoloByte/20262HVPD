//Orden de las operaciones.
// (Paréntesis-Exponentes- Multiplicación- División- Adición- SUstracción)

let resultado1 = (3-2) * (10/2); //RESULTADO: 5
let resultado2 = 3-2 * 10/2; //RESULTADO: -7
let resultado3 = (3-2) * 10/2; //RESULTADO: 5

//Imprimir consola
console.log(resultado1--);
console.log(resultado2++);
resultado3++;
console.log(resultado3);


let variable = "El desarrollo web es lo maximo";

//Metodos busqueda
console.log("IndexOf(s): "+variable.indexOf("s"));
console.log("LastIndexOf(x): "+variable.lastIndexOf("x"));
console.log("Include(TDS): "+variable.includes("TDS"));

//Metodos de reemplazo
console.log("Texto original: " + variable +
            " | Teexto replace: " + variable.replace("maximo", "DURO :D")
);
console.log ("ReplaceALL(e,E) "+ variable.replaceAll("e","E"));

//Casing
console.log("toUpperCase(): " +variable.toUpperCase());
console.log("toLowerCase(): " + variable.toLowerCase());