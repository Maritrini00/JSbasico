const prompt = require('prompt-sync')();
let frase = prompt('ahora un poema: ');
frase = new String(frase);
let espacio =" ";

for(let i=0;i<5;i++){
    console.log(espacio+frase);
    espacio = espacio+espacio;
}