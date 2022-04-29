class Persona {


    constructor(nombre,apellido,edad){

        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad ;
        

    }




    set_apellido(apellido_nuevo){

        this.apellido = apellido_nuevo ;
    }

    get_full_name(){


        return this.nombre + " " + this.apellido ;

    }

    es_mayor(){

        if (this.edad >= 18){

            return true ;

        }else {

            return false;
        }

    }

    es_mayor2(){

             return (this.edad >= 18) ;
        

    }


}


let persona1  = new Persona("Nicolas","Martini",31);
let persona2 = new Persona("Johanna","Dumrauf",27);
let persona3 = new Persona("Paula","Sanchez",15);


console.log(persona1);


if (persona1.es_mayor()){

   alert("la persona "+persona1.full_name() + "es mayor de edad"); 
}


if (!persona3.es_mayor()){

    alert("la persona "+persona1.full_name() + "es mayor de edad"); 
 }

 function solicitar_datos(){
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let edad = prompt("Ingrese su edad");

    if (nombre != '' && apellido != '' && edad != ''){

        let persona = new Persona(nombre,apellido,edad);
        persona.email = "n@gmail.com";
        console.log(persona);
    }



 }


 for (let i = 0 ;i<5;i++){

    
    solicitar_datos()

 }


