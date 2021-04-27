function parImpar(x){
    if(x%2==0){
        console.log("es par");
    }
    if(x%2==1){
        console.log("es non");
    }
}




const readline = require('readline');

let interfazCaptura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Par o non?")
interfazCaptura.question('elige un numero: ',function(numero){
   // console.log(`Su correo electronico es: ${respuesta}`);
    parImpar(numero);

    interfazCaptura.close();
});