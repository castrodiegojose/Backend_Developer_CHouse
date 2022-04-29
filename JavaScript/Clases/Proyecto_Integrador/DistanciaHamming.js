//var url = 'http://10.104.127.164/backups/06-11-21';
num1 = prompt("ingrese un numero");
parseInt(num1);
let bin1=transfBinaria(num1);

num2 = prompt("ingrese otro numero");
parseInt(num2);
let bin2=transfBinaria(num2);


if(bin1.length > bin2.length){
    while (bin1.length > bin2.length){
        bin2.unshift(0);
    }
}

else{
    while (bin1.length < bin2.length){
        bin1.unshift(0);
    }
}

console.log(bin2);
console.log(bin1);



let output = 0;

for (let i=0; i <= bin1.length; i++){  
    if (bin1[i] != bin2[i]){          
        output +=1;  
    }    
}

alert("la distancia de Hamming es: "+output);



function transfBinaria(num){

let binario = [];

    while( num > 0 ){

        let resto = num%2;
        binario.unshift(resto);
          
            if(resto == 1){
                num = (num/2) - 0.5;
            }
            else{num=num/2;}
            
    }

return binario;

}




// let resultado = 9 % 2;

// console.log(resultado);