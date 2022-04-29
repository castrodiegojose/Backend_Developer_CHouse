const express = require('express');

const app = express();

const PORT = 8080;

const server = app.listen(PORT,() => {
    console.log(`listening on port ${server.address().port}`);

})

server.on("error", error => console.log(`Error en servidor ${error.message}`));


app.get('/', (req, res) => {
    res.send('<h1 style="color:blue">"Hola loco!"</h1>');

})

let visitas=0
app.get('/visitas', (req, res) => {

    visitas++

    res.send(`las visitas son ${visitas}`);
    
})


