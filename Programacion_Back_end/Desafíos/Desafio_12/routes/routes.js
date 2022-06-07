import express from "express";
import {fork} from "child_process";
//const forked = fork("child_random.js")
const router = express.Router()


router.get('/info', (req, res) => {
    res.send({
        Argumentos_de_entrada : process.argv,
        Sistema_operativo: process.platform,
        Nodejs_Version: process.version,
        Uso_Memoria: process.memoryUsage(),
        Path: process.cwd(),
        Process_ID:process.pid,
    })
})


////////////FUNCIONA///////////////

router.get('/api/randoms', (req, res)=>{
    const cant = req.query.cant
    const forked = fork("child_random.js")
    forked.on('message', msg => {
        if (msg =='listo'){
            forked.send(cant)
        }else{
            //console.log('mensaje hijo', msg)
            res.json(msg)
        }
    })


////////////PRUEBA////////////////////

// router.get('/api/randoms', (req, res)=>{
//     const cant = req.query.cant
//     const forked = fork("child_random.js")
//     forked.send(cant)

//     child.on("message", msg => {
//         console.log(msg)
//         res.json(msg)
//     })




    // const response = forkerize(cant)
    // forked.send(cant)
    // forked.on("message", msg =>{
        //     res.json(msg)
        // })
        // res.send(response)
    })
    
    
    // function forkerize(cant){
    //     const forked = fork("child_random.js")
    //     console.log("ingreso a forkerize",cant)
    //     forked.send(cant)

    //     forked.on("message", msg =>{
    //         return msg
    //     })
        
        
        
    //     // forked.on("message", msg =>{
    //     //     if (msg == "listo"){
    //     //         forked.send(cant)
    //     //     }else{
    //     //         return msg
    //     //     }
    //     // })
    // }
export default router;
