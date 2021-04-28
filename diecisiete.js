const prompt = require('prompt-sync')();
let cont =0;
let suma =0;
let num1 =prompt('escoge el primer numero: ');
num1 = Number(num1);
let num2 = prompt('escoge el segundo numero (mas grande que el primero): ');
num2 = Number(num2);
multiplos2(num1,num2);
function multiplos2(a,b) {
        for(let i=a+1;i<b;i++){
            if(i%2==0){
                console.log(i)
                cont++;
                suma=suma+i;
            }
            
        }
        console.log(`entre ${a} y ${b} existen  ${cont} multiplos de 2`);
        console.log(`La suma de estos multiplos de 2 nos da ${suma}`);
    }
