 let matriz = [];
 for (let i =0;i<4;i++){
    matriz[i]=new Array(5);
} 
for (let i=0;i<4;i++){
    for(j=0;j<5;j++){
        matriz[i][j]=Math.floor(Math.random()*100)+1;
    }
}

console.log(matriz); 

