const mostrarLetras = (str, fin) => {
    for(let i = 0 ; i < str.length; i++){
        setTimeout((letra)=>{console.log(letra)},1000,str[i])
    }

    fin()
}

const fin = () => console.log("termine")


setTimeout(mostrarLetras,0,"Hola", fin);



let cadena = "¡Hola!";

const splitCadena = cadena.split("");

function fin() {
    console.log("Terminé");
}

function mostrarLetras(splitCadena, fin, t) {
    
    let i = 0;
    const tiempo = setInterval(() => {

            if (i < splitCadena.length) {

                console.log(splitCadena[i]);
                
                i++;
            
            } 
            else {
                clearInterval(tiempo);fin();
            }}, t);
        
}
    
mostrarLetras(splitCadena, fin, 0);
mostrarLetras(splitCadena, fin, 250);
mostrarLetras(splitCadena, fin, 500);