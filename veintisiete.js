function tablaMultiplicar(numero){
    for(i=0;i<=10;i++){
        console.log(numero*i);
    }
}

const readline = require('readline');

let interfazCaptura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Tabla de Multiplicar");
interfazCaptura.question('escoge un numero: ',function(respuesta){
  
   console.log(`Tabla de multiplicar de ${respuesta} :`);
   tablaMultiplicar(respuesta);
    

    interfazCaptura.close();
});