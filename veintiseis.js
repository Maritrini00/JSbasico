const prompt = require('prompt-sync')();
let center =require('center-align');
let frase = prompt('Ingrese una frase: ');
frase= new String(frase);

console.log(center([frase]));
