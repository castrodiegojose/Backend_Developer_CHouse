
// const min = 1;
// const max = 20;

// //let num =  Math.random() * (max - min) + min;
// let obj ={} 
// let count = 0;

// for (let i=0; i<10000; i++) {
//     let num =  Math.floor(Math.random() * (max - min) + min);    
     
//     if (obj[num]) {       
        
//         obj[num]++;

//     }
//     else {

//         obj[num] = 1
//     }
// }

// console.log(obj);

//////////////////USANDO PROMISES Y ASYNC AWAIT //////////////////


// const productos = [
//     { id:1, nombre:'Escuadra', precio:323.45 },
//     { id:2, nombre:'Calculadora', precio:234.56 },
//     { id:3, nombre:'Globo Terráqueo', precio:45.67 },
//     { id:4, nombre:'Paleta Pintura', precio:456.78 },
//     { id:5, nombre:'Reloj', precio:67.89 },
//     { id:6, nombre:'Agenda', precio:78.90 }
// ]

// // let prodNombres = productos.map(function (producto) {
// //     return producto.nombre

// // }).join(', ')

// // console.log(prodNombres)

// // let totalPrecios= productos
// //     .map((productos) => productos.precio)
// //     .reduce((acumulador, precio) => acumulador + precio,0)

// // let precioPromedio = (totalPrecios/productos.length)

// const getProduct = (id) => 
//     new Promise((resolve, reject)=>{
//         const prod = productos.find((item)=>item.id === id);
//         if(prod) {
//             resolve(prod)
//         }
//         else{
//             reject(`no se encontró el id ${id}`)
//         }
//     })
        

// const buscador = async(id) => {
//     try{ 
//         const post = await getProduct(id)
//         console.log(post);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// buscador(7);


//////////// USANDO MODULO COWSAY /////////////////////


// const cowsay = require("cowsay");

// console.log(
//     cowsay.say({
//         text: "holaaaaa",
//         e: "-O",
//         T: "W"
//     })
// )