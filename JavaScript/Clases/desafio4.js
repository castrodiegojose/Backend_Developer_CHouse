
let operacion = prompt("Ingrese si quiere realizar una Sumatoria o un Factorial o ESC para salir ");
while(operacion != "ESC"){
    
    recepcion(operacion);

    operacion = prompt("Ingrese si quiere realizar una Sumatoria o un Factorial o ESC para salir ");

}


function recepcion (operacion) {

    if (isNaN(operacion)){
        operacion = operacion.toLowerCase();

        switch (operacion){
            case "sumatoria":
                numero1 = prompt("Ingrese un numero: ");
                sum = sumatoria(numero1);                
                alert("la sumatoria del "+numero1+" es "+sum)

                break;
            case "factorial":
                numero2 = prompt("Ingrese un numero: ");
                fact = factorial(numero2);
                alert("el factorial del "+numero2+" es "+fact)

                break;

            default:
                alert("Datos ingresados erroneos!");
                break;

            
        }        

    }
    else{alert("Datos ingresados erroneos!")}


}



function sumatoria(numero1){
    
    let sum = 0
    for (let i = 1 ; i <= numero1; i++){
        sum=sum+i;
    }

    return sum
}


function factorial(numero2){
    
    let fact = 1
    for (let i = 1 ; i <= numero2; i++){
        fact= fact * i;
    }

    return fact
}