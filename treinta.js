const prompt = require('prompt-sync')();
function suma(a,b){
    console.log (`Resultado de la suma: ${a+b}`);
}

function resta(a,b){
    console.log (`Resultado de la resta: ${a-b}`);
}

function multiplicacion(a,b){
    console.log (`Resultado de la multiplicacion: ${a*b}`);
}

function division(a,b){
    if(b==0){
        console.log ("error, no se puede dividir entre 0");
    }else{
        console.log (`Resultado de la division: ${a/b}`);
    }
}


function menu(){
    
    let num1 = prompt('escribe un numero: ');
    num1 = Number(num1);
    let num2 = prompt('escribe otro numero: ');
    num2 = Number(num2);
    console.log("----Menú----");
    console.log("1. suma");
    console.log("2. resta");
    console.log("3. multiplicación");
    console.log("4. división");
    let opc = prompt('que operación quieres realizar?: ');
    opc = Number(opc);
    switch(opc){
        case 1:
            suma(num1,num2);
            break;
        case 2:
            resta (num1,num2);
            break;
        case 3:
            multiplicacion(num1,num2);
            break;
        case 4:
            division(num1,num2);
            break;
    }
}

menu();