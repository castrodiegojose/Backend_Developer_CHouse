////////   CRUD MongoDB //////////////////

db.productos.insertMany([ 
{
    nombre: "lapicera",
    precio: 100,
    thumbnail: "https://imagenes.com/129.png"
},
{
    nombre: "cuaderno",
    precio: 160,
    thumbnail: "https://imagenes.com/123.png"
},
{
    nombre: "resma",
    precio: 500,
    thumbnail: "https://imagenes.com/132.png"
},
{
    nombre: "lapiz",
    precio: 759,
    thumbnail: "https://imagenes.com/132.png"
},
{
    nombre: "marcador",
    precio: 2860,
    thumbnail: "https://imagenes.com/189.png"
},
{
    nombre: "lapiz rojo",
    precio: 4950,
    thumbnail: "https://imagenes.com/182.png"
},
{
    nombre: "goma de borrar",
    precio: 3500,
    thumbnail: "https://imagenes.com/13.png"
},
{
    nombre: "lapiz azul",
    precio: 1900,
    thumbnail: "https://imagenes.com/152.png"
},
{
    nombre: "carpeta",
    precio: 3950,
    thumbnail: "https://imagenes.com/13.png"
},
{
    nombre: "regla",
    precio: 2950,
    thumbnail: "https://imagenes.com/139.png"
}

])


db.mensajes.insertMany([ 
{
    nombre: "Diego",
    mensaje: "hola"
},
{
    nombre: "Pepe",
    mensaje: "hola"
},
{
    nombre: "Diego",
    mensaje: "como estas?"
},
{
    nombre: "pepe",
    mensaje: "bien, vos?"
},
{
    nombre: "Diego",
    mensaje: "todo bien"
},
{
    nombre: "Diego",
    mensaje: "de donde sos"
},
{
    nombre: "pepe",
    mensaje: "de miami"
},
{
    nombre: "pepe",
    mensaje: "vos?"
},
{
    nombre: "Diego",
    mensaje: "de Ukraniaaaaaaa"
},
{
    nombre: "Diego",
    mensaje: "hola"
}
  
])

db.productos.insertOne({

    nombre: "goma de borrar tinta",
    precio: 3900,
    thumbnail: "https://imagenes.com/125.png"

})

db.productos.find({nombre: "goma de borrar tinta"})

db.productos.find({precio:{$lt:1000}}).pretty()
db.productos.find({precio:{$all: [1000, 3000]}}).pretty()

db.productos.find({precio:{$gt:1000, $lt:3000}}).pretty()







//////////////////   EXPRESS    //////////////////////////////


// const express = require('express');
// const { get } = require('express/lib/response');
// const app = express();
// const port = 8080;

// ///// nos permite leer formato json desde el post///////
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// ///// motor de plantillas /////
// app.set("view engine", "ejs");
// app.set("views", __dirname + "/views");

// const datos = []


// app.get("/", (req, res) => {
//     res.render("form", {datos});

// })


// app.post("/personas", (req, res) => {
//     nuevaPersona= req.body
//     datos.push(nuevaPersona)

//     res.render("form", {datos})
// })


// app.listen(port,()=>{
//     console.log("escuchando servidor en el puerto:",port)
// })
// app.on("error", error => console.log(`Error en servidor : ${error}`))





///////////// EJEMPLO PERSONAS Y MASCOTAS AGREGADAS //////////////

// let personas = [{'nombre': 'Diego',
//                 'apellido':'Castro',
//                 'edad': 35}];

// let mascotas = [{'nombre': 'Poncho',
//                 'apellido':'Castro',
//                 'edad': 8}]  
                
// //////// Personas

// app.get('/personas', (req,res)=>{

//     res.send(personas)
// })

// app.post('/personas', (req,res)=>{

//     let newpersona = req.body

//     console.log(newpersona)

//     personas.push(newpersona)

//     res.send("nueva persona agregada")

// })


// ////// Mascotas 
// app.get('/mascotas', (req,res)=>{

//     res.send(mascotas)
// })

// app.post('/mascotas', (req,res)=>{

//     let newmascota = req.body

//     personas.push(newmascota)

//     res.send("nueva mascota agregada")

// })



/////////////EJERCICIO FRASE CON GET,POST, PUT and DELETE ///////////////////



// let frase = 'Hola mundo como estan'

// app.get('/api/frase', (req,res)=>{
    
//     res.send({'frase': frase});
// })

// app.get('/api/palabras/:num', (req,res)=>{

//     const num = req.params.num     
//     let palabras = frase.split(' ')

//     if (isNaN(num)){
//         res.send({error: "El parametro no es un numero"})
//     }
//     else if(num - 1  >= palabras.length){
//         res.send({error: "El parametro esta fuera de rango"})

//         }
//     else{
//         res.send({'La palabra es': palabras[num-1]})
//     }
// })

// app.post('/api/palabras', (req,res)=>{
    
//     let palabra = req.body.palabra
//     console.log(palabra)
//     let array = frase.split(' ')
//     array.push(palabra);
//     frase = array.join(' ')
//     let pos = array.indexOf(palabra)
//     res.send({Agregada: palabra, Pos: pos + 1})
// })


// app.put('/api/palabras/:pos', (req,res)=>{

//     let pos = req.params.pos
//     palabra = req.body.palabra
//     array = frase.split(' ')

//     if(pos > array.length){
//         res.send({Error:'parametro fuera de rango'})
//     }
//     else{

//     let anterior = array[pos-1]

//     array[pos - 1] = palabra

//     frase = array.join(' ')

//     res.send({'Actualizada': palabra,
//             'Anterior':anterior})
//     }

    
// })

// app.delete('/api/palabras/:pos', (req, res) => {
    
//     pos = req.params.pos
//     palabra = req.body.palabra
//     array = frase.split(' ')

//     if(pos > array.length){
//         res.send({Error:'parametro fuera de rango'})
//     }
//     else{

//         let eliminada = array[pos-1]

//         array.splice(pos-1, 1)

//         frase = array.join(' ')

//         res.send({'eliminada': eliminada,'newLength':array.length})

//     }



// })






//////////////////// SUMA NUMEROS //////////////////////////

// app.get('/api/sumar/:n1/:n2',(req,res)=>{

//     const num1 = parseInt(req.params.n1)
//     const num2 = parseInt(req.params.n2) 

    

//     const sum = num1 + num2;

//     console.log(sum)

   

//     res.send(`${sum}`);

// })

// app.get('/api/sumar',(req,res)=>{

//     const num1 = parseInt(req.query.n1)
//     const num2 = parseInt(req.query.n2) 

    

//     const sum = num1 + num2;

//     console.log(sum)

//     res.send(`${sum}`);

// })

// app.get('/api/operacion/:numer', (req,res)=>{

//     const num = req.params.numer   

//     array = num.split("+")

//     console.log(array)

//     sum = parseInt(array[0])+parseInt(array[1])

//     console.log(sum)

//     res.send(`${sum}`);

// })

/////////////// DEVUELVE LETRAS Y PALABRAS //////////////////////////////////

// const frase = 'Hola mundo como estan'

// app.get('/api/frase', (req,res)=>{
    
//     res.send(`${frase}`);
// })

// app.get('/api/letras/:num', (req,res)=>{

//     const num = req.params.num

//     console.log(num)

//     if (isNaN(num)){
//         res.send({error: "El parametro no es un numero"})
//     }
//     else if(num - 1  >= frase.length){
//         res.send({error: "El parametro esta fuera de rango"})

//         }
//     else{
//         res.send(`La letra es: ${frase[num-1]}`)
//     }
// })

// app.get('/api/palabras/:num', (req,res)=>{

//     const num = req.params.num 
//     let palabras = [];
//     palabras = frase.split(' ')

//     if (isNaN(num)){
//         res.send({error: "El parametro no es un numero"})
//     }
//     else if(num - 1  >= palabras.length){
//         res.send({error: "El parametro esta fuera de rango"})

//         }
//     else{
//         res.send(`La palabra es: ${palabras[num-1]}`)
//     }
// })

//////////////////// SUMA VISITAS //////////////////////
// let visitas=0; 
// app.get('/visitas', (req,res)=>{
//     visitas++;
//     res.send(`<h1 style="color:blue"> La cantidad de visitas son : ${visitas}</h1>`);
// })


// app.get('/fyh', (req,res)=>{
//     let fyh = new Date();
    
//     res.send(`{fyh:${fyh}}`);
// })
