//child
console.log("child created", process.pid)

process.on("message", msg =>{
    const result = counter(msg);  
    process.send(result)   
    process.exit();
})

process.send("listo") // funciona con esta linea//

function counter(cant){
    const min = 1;
    const max = 1001;
    let obj ={} 
    for (let i=0; i<cant; i++) {
        let num =  Math.floor(Math.random() * (max - min) + min);    
        if (obj[num]) {       
            obj[num]++;
        }
        else {
            obj[num] = 1
        }
    }
    return obj;
}