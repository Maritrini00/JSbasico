const prompt = require('prompt-sync')();

let frase=prompt('escribe la frase que quieras: ');
frase= new String(frase);
let letra ;
letra = prompt('escribe una letra: ');
let tamano = frase.length;
let cont =0;

for(let i =0;i<tamano;i++){
    if(frase.charAt(i)===letra){
        cont++
    }
}
console.log(`se repite ${cont} veces la letra ${letra}`);
