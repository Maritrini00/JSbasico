const prompt = require('prompt-sync')();
console.log("Las calificaciones de María");

let alegbra = prompt('algebra: ');
alegbra = Number(alegbra);
let calculo= prompt('calculo: ');
calculo = Number(calculo);
let fisica= prompt('fisica: ');
fisica = Number(fisica);
let programacion= prompt('poo: ');
programacion = Number(programacion);
let tymi=prompt('tymi: ');
tymi = Number(tymi);
let quimica=prompt('quimica: ');
quimica = Number(quimica);
let biologia=prompt('biologia: ');
biologia = Number(biologia);
let etica=prompt('etica: ');
etica = Number(etica);
let derecho=prompt('derecho: ');
derecho = Number(derecho);

let califas= [alegbra,calculo,fisica,programacion,tymi,quimica,biologia,etica,derecho];
//console.log(califas);
califas.sort((a, b) => a - b);
let lowMiddle = Math.floor((califas.length - 1) / 2);

let highMiddle = Math.ceil((califas.length - 1) / 2);
let median = (califas[lowMiddle] + califas[highMiddle]) / 2;
console.log(`Promedio de María: ${median}`);