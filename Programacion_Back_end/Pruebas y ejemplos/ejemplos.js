

// //Funciones Closures
// const funcionmultiplicar = function(multiplo){
//     return function multiplicador(numero){
//         return multiplo*numero;
//     }
// }

// let pordos = funcionmultiplicar(2);
// let portres = funcionmultiplicar(3)

// console.log(pordos(5));

// console.log(portres(3));


class Usuario{
    constructor(name, apellido, libros, mascotas ){
        this.name = name;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas

    }

    getFullName () {
        console.log(`Full Name: ${this.name} ${this.apellido} `)
    }

    addMascota(nombre) {
        this.mascotas.push(nombre)
    }

    countMascotas() {

        let count = this.mascotas.length
        console.log(count)
    }

    addBook(nombreLibro, autorLibro){
        this.libros.push({nombre:nombreLibro, autor: autorLibro})
    }

    getBookNames(){
        let arrayLibros = [];
        this.libros.forEach(element => { arrayLibros.push(element.nombre)
            
        });

        console.log(arrayLibros);
    }


       

}

const diego = new Usuario("Diego", "Castro", [{nombre:"Rayuela",autor:"Cortazar"}],["poncho", "berenjena"]);

diego.getFullName();

diego.countMascotas();

diego.addMascota("bicho");

diego.addBook("El Tunel","Sabato");

console.log(diego);
    
diego.getBookNames();


