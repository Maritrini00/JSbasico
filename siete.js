const readline = require('readline');
let cont = 0;

let interfazCaptura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('ingrese varios frases por cada linea  escribe "salir" para terminar la captura');

interfazCaptura.setPrompt('>>> ');
interfazCaptura.prompt();

interfazCaptura.on('line',function(entrada){
    entrada = entrada.trim();

    if(entrada==='salir'){
        interfazCaptura.close();
        return;
    }else{
        entrada = Number(entrada);

        cont++;
    }
});

interfazCaptura.on('close',function(){
    console.log(`Total de las frases : ${cont}`);
    process.exit(0);
})