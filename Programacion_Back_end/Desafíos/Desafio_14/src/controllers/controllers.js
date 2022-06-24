import {classMAria, classSqLite} from '../classDB.js';
import {classRandom} from '../classRandomCats.js';
import "../passport/local-auth.js"
import {logger, loggWarningFile} from '../utils/logger.js'


const controller = {};

controller.indexGet = async (req, res) => { 
    let user = req.user.email
    const productos = await classMAria.getAllProducts()
    const mensajes = await classSqLite.getAllMessages()
    res.render('index', {productos, mensajes, user})    
} 

controller.singupGet = async (req, res, next) => {
    logger.info(`Ruta ${req.url} y Metodo ${req.method}`)
    res.render('signup')
}

controller.singupPost = async (req, res, next) => {
    logger.info(`Ruta ${req.url} y Metodo ${req.method}`);
    next();
 }

controller.loginGet = async (req, res) => {
    res.render('login')
}

controller.loginPost = async (req, res, next) => {
    logger.info(`Ruta ${req.url} y Metodo ${req.method}`);
    next();
    }

controller.logoutGet = async (req, res) => {
        logger.info(`Ruta ${req.url} y Metodo ${req.method}`);
        let user = req.user.email  
        req.session.destroy(err=>{
            if (!err) {
                res.render('logout', {user});
            }
            else res.send({status: 'Logout ERROR', body: err});        
        })
    }

controller.gatosGet = async (req, res) => {
    logger.info(`Ruta ${req.url} y Metodo ${req.method}`);
    const catsRandom = await classRandom.catsRandom();
    res.render('catTest', {catsRandom})
}

controller.pageNotFound = (req, res, next) => {
    loggWarningFile.warn(`Ruta ${req.url} y Metodo ${req.method} no establecido`)
    res.status(404).render('error-notfound')
}


export default controller;