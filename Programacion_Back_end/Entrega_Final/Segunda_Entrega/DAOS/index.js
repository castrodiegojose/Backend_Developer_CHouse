import mongoCarrito from './mongoDB/mongoCarrito.js';
import mongoProductos from './mongoDB/mongoProductos.js';
import config from '../config.js';


const db = config.TIPO_DB || 'mongodb';
console.log(db);
// importconst url = 'mongodb://localhost:27017/mibase'

let productoApi;
let carritoApi;

switch (db) {
    case 'mongodb': 
        productoApi= new mongoProductos();
        carritoApi = new mongoCarrito();

        break;
    default:
        productoApi = new firebaseProductos();
        carritoApi = new firebaseCarrito();
        break;
}

export {productoApi, carritoApi};