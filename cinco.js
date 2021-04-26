for(let i=0;i<=100;i++){
    if(i%2==1){
        console.log(i);
    }  
}

function cuantos(){
    let cont=0;
    for(let i=0;i<=100;i++){
        if(i%2==1){
            cont++;
        }  
    }
    return cont;
}
console.log("existen "+cuantos()+" numeros impares del 0 al 100");