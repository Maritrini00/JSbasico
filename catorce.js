

const prompt = require('prompt-sync')({sigint: true});
let max= 0;
let min =9999
let cont=0;
while(cont<5){
  let num = prompt('escribe un numero: ');
  num = Number(num);
  if(num>max){
    max=num;
  }
  if(num<min){
    min=num;
  }
  cont++;
}
console.log(`numero maximo: ${max}`);
console.log(`numero minimo: ${min}`);