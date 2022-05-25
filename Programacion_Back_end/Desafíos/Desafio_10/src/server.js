///////////////// MODULOS ////////////////////
import BaseMaria from './classDB.js';
import express from 'express';
import { Server as HttpServer } from 'http';
import { Server as IOServer } from 'socket.io';
import RandomCat from './classRandomCats.js';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import path from 'path'
//---------- Persistencia por Mongo -----------//
import MongoStore from 'connect-mongo';

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);


/// genero dos clases una con la conf de mariaDB y otra con Sqlite
const classMAria = new BaseMaria();
const classSqLite = new BaseMaria();
const classRandom = new RandomCat();


classSqLite.createTableMsj();
classMAria.createTable();


///////////////// MIDDLEWARES////////////////////

//------- SESSION -----------//
app.use(cookieParser())
app.use(session({
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://diego:32882457@cluster0.dcufv.mongodb.net/DiegoDB?retryWrites=true&w=majority',
        ttl: 10}),
    secret: '1234567890!"#$%&/()=',
    resave: false,
    saveUninitialized: false,
    cookie:{
         //maxAge:60000
        expires:60000
    }
    
}))
//------- MOTOR DE PLANTILLAS --------//
app.use(express.static("./public"));
app.set("views", "./src/views");
app.set("view engine", ".ejs");
app.use(express.urlencoded({extended: true}));

//----------- AUTENTICADOR --------------//

function auth(req, res, next){
    if (req.session.usuario){
            next()
    } else {
            res.redirect('login')
    }
}

///////////////// RUTAS ////////////////////

app.get('/' , (req, res)=>{
    res.redirect('login')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', (req,res)=>{
    const nombre = req.body;
    req.session.usuario = nombre
    console.log(req.session.usuario)
    res.redirect('/productos');

})

app.get('/productos', auth, async (req, res) => {  
    let user
    user = req.session.usuario
    console.log(req.session.id)
    const productos = await classMAria.getAllProducts()
    const mensajes = await classSqLite.getAllMessages()
    res.render('index', {productos, mensajes, user})    
    
})

app.get('/logout',auth ,async (req, res) => {
    let user
    user = req.session.usuario  
    req.session.destroy(err=>{
        if (!err) {
            res.render('logout', {user});
        }
        else res.send({status: 'Logout ERROR', body: err});        
    })

})


app.get('/api/gatos-test', async (req, res) => {

    const catsRandom = await classRandom.catsRandom();
    res.render('catTest', {catsRandom})
})


///////////////// SERVER ////////////////////

httpServer.listen(8080, function () {
    console.log('listening on port 8080');
}); 

///////////////// WEB SOCKET ////////////////////

io.on('connection', socket => {
    console.log(`Un cliente se ha conectado:${socket.id.substring(0,4)}`);
   
    socket.on('new-product', async (data) => {
        classMAria.guardarProducto(data)
        productos = await classMAria.getAllProducts();
        io.sockets.emit('product-refresh', productos);
    });

  
    
    socket.on('new-message', async (data) => {
        classSqLite.guardarMensaje(data)
        mensajes = await classSqLite.getAllMessages()
        io.sockets.emit('message-refresh', mensajes);
    });
    
    
});





