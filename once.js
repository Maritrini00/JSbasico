function imprimirMultiplos(x){
    for(let i=1;i<=x;i++){
        console.log(i*3);
    }
}

const readline = require('readline');

let interfazCaptura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("multiplos de 3");
interfazCaptura.question('hasta que número: ',function(respuesta){
   
    imprimirMultiplos(respuesta);

    interfazCaptura.close();
});