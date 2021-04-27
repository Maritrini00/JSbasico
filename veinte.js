function factorial(x){
    let total=1;
    for(let i=1;i<=x;i++){
        total=total*i;
    }
    return total;
}
const readline = require('readline');

let interfazCaptura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Factorial de un numero")

interfazCaptura.question('escoge un numero: ',function(respuesta){
   
    console.log(`El factorial de ${respuesta} es: ${factorial(respuesta)}`);

    interfazCaptura.close();
});