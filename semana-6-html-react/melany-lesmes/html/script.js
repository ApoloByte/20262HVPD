function nombreFuncion (){
    console.log("first")
}

const funcion2 = ()=>{
    console.log("second")
}
const users =[
    {
        "name": "eduardo",
        "age" : 30
    },
    {
        "name": "karen",
        "age" : 30
    }
]

const funcion3 =()=>{
    //callback
    users.map ((user) => {console.log (user.name)})

}