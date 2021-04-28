const prompt = require('prompt-sync')();
console.log("Las calificaciones de María");
let califas=[];
for(let i=1;i<=10;i++){
    let cal = prompt(`materia ${i}: `);
    cal = Number(cal);
    califas[i]=cal;
}

let quiereCal= prompt('cual calificacion quieres?: ');
quiereCal=Number(quiereCal);
for(let i=1;i<=10;i++){
    if(quiereCal==califas[i]){
        console.log(`Tu calificación está en la materia: ${i}`);
    }else{
        console.log("No tienes esa calificación");
    }
}