import express from "express";
const app = express();
import router from "./routes/routes.js";
// import cmd from 'node:cmd';
// cmd.run('npm start');

const PORT = parseInt(process.argv[2]) || 8080

app.use('/', router);

app.listen(PORT, function() {console.log(`Servidor puerto ${PORT}`)})
