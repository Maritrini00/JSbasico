const prompt = require('prompt-sync')();
let cont =0;
let suma =0;
let num1 =prompt('escoge el primer numero: ');
num1 = Number(num1);
let num2 = prompt('escoge el segundo numero (mas grande que el primero): ');
num2 = Number(num2);
serie(num1,num2);
pares(num1,num2);
sumaImpares(num1,num2);
function serie(a,b){
    for(let i=a+1;i<b;i++){
        console.log(i)
        cont++;
    }
    console.log(`entre ${a} y ${b} existen  ${cont} numeros`);
}

function pares(a,b){
    console.log(`pares entre ${a} y ${b}: `);
    for(let i=a+1;i<b;i++){
        if(i%2==0){
            console.log(i);
        }     
    }
}

function sumaImpares(a,b){
    for(let i=a+1;i<b;i++){
        if(i%2==1){
            suma=suma+i;
        }     
    }
    console.log(`la suma de los nones entre ${a} y ${b} es de ${suma}`);
}