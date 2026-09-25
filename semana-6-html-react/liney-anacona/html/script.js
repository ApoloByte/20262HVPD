const users = [
    {
        "name": "eduardo",
        "age":30
    },
    {
        "name": "Karen",
        "age": 27
    },
]


function nombreFuncion(){
    console.log("first")
}


const funcion2 = () => {
    console.log("second")
}

const funcion3 =() => {
    //callback
    users.map((user) => {console.log(user.name)})
}