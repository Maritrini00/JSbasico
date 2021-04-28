let matriz = [];
 for (let i =0;i<4;i++){
    matriz[i]=new Array(5);
} 
for (let i=0;i<4;i++){
    for(let j=0;j<5;j++){
        matriz[i][j]=Math.floor(Math.random()*100)+1;
    }
}

console.log(matriz); 


function trans(matriz,tam) {
    let trans=[];
    for(let i =0;i<matriz.length;i++){
        trans.push([]);
    }
    
    for(let i =0;i<matriz.length;i++){
        for(let j=0;j<tam;j++){
            trans[j].push(matriz[i][j]);
        }
    }
    return trans;    
}

console.log(trans(matriz,matriz.length));