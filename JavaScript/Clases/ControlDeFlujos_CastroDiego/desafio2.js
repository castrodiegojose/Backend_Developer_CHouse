
var nombre = prompt("Calculadora de Indice de Masa corporal, Ingrese su Nombre: ");

var peso = prompt("Ingrese su peso:");

peso = parseFloat(peso);

var altura = prompt ("Ingrese su altura:");

altura = parseFloat(altura);

imc = peso / Math.pow(altura,2);

imc = parseFloat(imc);

if (imc < 18.5){

    alert(nombre+" tienes bajo peso");

}
else if (imc >= 18.5 && imc < 25){

    alert(nombre+" tu IMC es Normal");
}
else if (imc >= 25 && imc < 30){

    alert(nombre+" Tienes sobre peso");
}
else {

    alert(nombre+" Tienes obesidad");

}




