
//Creo una clase Nombre de personas donde defino los campos nombre y edad
class Nombres {

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
                
    }

}


let baseDeDatos=[]; // creo un array vacio 

/* utilizo el for para ingresar por prompt 3 personas y llamo a la funcion "agregar"
    la cual ingresa los datos en el array*/
for (let i=0; i<= 2 ; i++){
    let nombreCapturar = prompt("Ingrese su nombre: ");
    let edadCapturar = prompt("Ingrese su edad: ");
    nuevaPersona = new Nombres(nombreCapturar, edadCapturar);
    console.log(nuevaPersona);
    agregar(nuevaPersona);
}

function agregar(nuevaPersona){

    baseDeDatos.push(nuevaPersona); // Ingresa los datos en el array creado previamente
    //console.log(baseDeDatos);
}

let ordenEdad = confirm("ordenar de menor a mayor?");

if (ordenEdad){
    
    
    const persOrdenadas = baseDeDatos.sort((p1,p2) =>{ //ordeno con la funcion sort de menor a mayor
        return p1.edad - p2.edad
    })

alert("el mas chico es "+ persOrdenadas[0].nombre+ " con " + persOrdenadas[0].edad);
alert("el del medio es "+ persOrdenadas[1].nombre+ " con " + persOrdenadas[1].edad);
alert("el mas grande es "+ persOrdenadas[2].nombre+ " con " + persOrdenadas[2].edad);


console.log(persOrdenadas);
};





