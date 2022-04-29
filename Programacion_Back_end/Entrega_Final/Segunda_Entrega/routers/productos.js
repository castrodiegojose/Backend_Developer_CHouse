import express from "express";
import {productoApi} from '../DAOS/index.js'
export const routerProd =  new express.Router();



routerProd.get('/:id?', async (req, res) => {
    const id = parseInt(req.params.id);
    if (id) {
        res.send(await productoApi.getById(id));
    } else {
        res.status(200).json(await productoApi.getAll());
    }
})


routerProd.post('/', auth, (req, res) => {
    const newProduct = req.body;
    productoApi.save(newProduct);
    res.send({ 'Nuevo Producto agregado': newProduct });
})

routerProd.put('/:id', auth, (req, res) => {
    const  id = parseInt(req.params.id);
    const newprod = req.body;
    res.send(productoApi.putUpload(id, newprod));
})

routerProd.delete('/:id', auth, (req, res) => {
    const id = parseInt(req.params.id);
    res.send(productoApi.deleteById(id));
});


function auth(req, res, next) {
    if (req.query.admin === 'true') {
        next();
    } else {
        res.send({ error: -1, description: `ruta ${req.path} para el metodo ${req.method} no autorizada` });
    }
}   

