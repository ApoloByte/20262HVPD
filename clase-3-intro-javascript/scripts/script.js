let resultado1 = (3-2)*(10/2);

    console.log(resultado1)
    console.log(resultado1--)
    console.log(resultado1)

let resultado2 = (3-2 * 10/2);

    console.log("resultado del  ejemplo b -> " + resultado2)
    console.log(resultado2++)
    console.log(resultado2)

let resultado3 = (3-2) * 10/2;

	console.log(resultado3)
    console.log(resultado3++)
    console.log(resultado3)

    console.error("esto es un error")
    console.warn("esto es advertencia")
    
    let oracion = "El desarrollo web es lo maximo";

    console.log(oracion.includes("Avion"));
    console.log(oracion.indexOf("xi"));
    console.log(oracion.lastIndexOf("o")); // te indica el numero de donde esta ubicada la ultima letra en la oracion

    console.log(oracion.replace("web", "de software"))
    console.log(oracion.replaceAll("l", "|"))

    console.log(oracion.toUpperCase());
    console.log(oracion.toLowerCase());

    console.log(oracion[3]);