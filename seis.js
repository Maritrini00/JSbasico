function imprimirHasta(x){
    for(let i=0;i<=x;i++){
        console.log(i);
    }
}

const readline = require('readline');

let interfazCaptura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interfazCaptura.question('hasta que número: ',function(respuesta){
   // console.log(`Su correo electronico es: ${respuesta}`);
    imprimirHasta(respuesta);

    interfazCaptura.close();
});