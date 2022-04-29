
const express = require('express');
//const { get } = require('express/lib/response');
const app = express();
const port = 8080;

app.use('/static', express.static(__dirname+'/public'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));



let personas = [
    {
        nombre: 'Diego',
        apellido:'Castro',
        edad: 35
    }
];

let mascotas = [
    {
        nombre: 'Poncho',
        raza:'Salchicha',
        edad: 8
    }
];  
                
//////// Personas
app.route('/personas')
    .get((req,res)=>{

        res.send(personas)
    })

    .post((req,res)=>{
    
        let newpersona = req.body
        
        console.log(newpersona)
        
        personas.push(newpersona)
        
        res.send("nueva persona agregada")
    
    })


////// Mascotas 

app.route("/mascotas")
    .get((req,res)=>{
    
        res.send(mascotas)
    })

    .post((req,res)=>{

        let newmascota = req.body
        
        mascotas.push(newmascota)
        
        res.send("nueva mascota agregada")
        
    })


app.listen(port,()=>{
    console.log("escuchando servidor en el puerto:",port)
})
app.on("error", error => console.log(`Error en servidor : ${error}`))