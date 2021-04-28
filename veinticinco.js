const prompt = require('prompt-sync')();
function griegos(x){
    if(!+x){
        return false;
    }
    let digitos= String(+x).split(""),
    llave = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
            "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
            "","I","II","III","IV","V","VI","VII","VIII","IX"],
        romano= "",
        i=3;
        while(i--){
            romano =(llave[+digitos.pop()+(i*10)]||"")+romano;
        }
        return Array(+digitos.join("")+1).join("M")+romano;
}

console.log("-----Numero romanos-------");
let numero =prompt('que numero quieres convertir: ');
numero= Number(numero);
console.log(`Tu numero en Romano es: ${griegos(numero)}`);