var numero = prompt("Ingrese un numero o ESC para salir ")
    while(numero != "ESC"){
    if (isNaN(numero)){
        alert("No ingresaste un numero!");
    }
    else{
        numero = parseInt(numero);
        let par= 0;
        let impar = 0;
            for (let i=0 ; i<=numero ; i++){
                
                if (i % 2 == 0){
                    par++;
                }
                else{ impar++; }

        
            }
        alert("Exisisten "+par+" numeros pares, y "+impar+" numero impares entre 0 y "+numero);
    }

    var numero = prompt("Ingrese un nuevo numero o ESC para salir ");
}