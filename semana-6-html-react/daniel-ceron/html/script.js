function nombreFuncion(){
    console.log("EO")
}

const funcion2 = () => {
    console.log("2")
}

const users = [
    {
        "name": "Daniel",
        "age": 30
    },
    {
        "name": "John",
        "age": 54
    }
]

const funcion3 = () => {
    users.map(
        (e) => {
            console.log(e.name)
        }
    )
}