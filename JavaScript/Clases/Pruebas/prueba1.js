class Usuario{
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
}

let persona = new Array();



// let formularios = document.getElementById("formularios");
// let inputs = document.querySelectorAll("#formularios input");

let varlidarformulario = () =>{

let nombre = document.getElementById('name').value;
let edad = document.getElementById('age').value;

console.log(nombre)
console.log(edad)

if (nombre=="" || edad==""){
    let mensajehtml = document.getElementById("formulario_mensaje");
    let li = document.createElement("li")
    li.style.color="red";
    li.innerHTML="Ingrese todos los parametros!";
    mensajehtml.appendChild(li);
}
else{
    let mensajehtml = document.getElementById("formulario_mensaje")
    let hijo = mensajehtml.lastChild
    mensajehtml.removeChild(hijo)
     
    principal(nombre,edad);
                
     }
}

function principal(nombre, edad){
    
    for(let i of personas)
}


document.getElementById("submit").addEventListener("click",varlidarformulario)
document.addEventListener("keydown", (e)=>{
    if(e.key =="Enter"){
        console.log("hola")
        
        varlidarformulario();
    }
})



formularios.addEventListener("submit", (e)=>{
    e.preventDefault();

})