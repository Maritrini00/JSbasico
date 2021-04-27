function positivoNegativo(x){
    if(x>=0){
        console.log("es positivo");
    }
    if(x<0){
        console.log("es negativo");
    }
}

positivoNegativo(3);


const readline = require('readline');

let interfazCaptura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Positivo o negativo?")
interfazCaptura.question('elige un numero: ',function(numero){
   // console.log(`Su correo electronico es: ${respuesta}`);
    positivoNegativo(numero);

    interfazCaptura.close();
});