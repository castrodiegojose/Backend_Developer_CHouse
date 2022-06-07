import express from "express";
const app = express();
import router from "./routes/routes.js";

app.use('/', router);



app.listen(8080, function() {console.log("Servidor puerto 8080")})