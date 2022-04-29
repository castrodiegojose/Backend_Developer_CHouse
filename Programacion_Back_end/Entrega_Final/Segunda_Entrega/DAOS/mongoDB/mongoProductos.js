import contenedorMongo from '../../contenedores/contenedorMongo.js';
import ProductoModel from '../../models/productosModel.js';

export default class mongoProductos extends contenedorMongo {

    constructor(){
        super(ProductoModel);
    }

    
}      
