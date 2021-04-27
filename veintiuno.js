
function sumaPares(){
    let suma = 0;
    for(let i=1;i<=1000;i++){
        if(i%2==0){
          suma +=i;  
        }   
    }
    return suma;
}
function sumaImpares(){
    let suma = 0;
    for(let i=1;i<=1000;i++){
        if(i%2==1){
          suma +=i;  
        }   
    }
    return suma;
}


console.log("la suma de los numeros pares del 1 al 1000 es: "+sumaPares());
console.log("la suma de los numeros impares del 1 al 1000 es: "+sumaImpares());
