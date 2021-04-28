const prompt = require('prompt-sync')();
console.log("Las calificaciones de María");
let califas=[];
for(let i=1;i<=10;i++){
    let cal = prompt(`asignatura ${i}: `);
    cal = Number(cal);
    califas[i]=cal;
}

califas.sort((a, b) => a - b);
let lowMiddle = Math.floor((califas.length - 1) / 2);
let highMiddle = Math.ceil((califas.length - 1) / 2);
let median = (califas[lowMiddle] + califas[highMiddle]) / 2;
console.log(`Promedio de María: ${median}`);