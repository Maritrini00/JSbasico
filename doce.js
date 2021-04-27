function Imprimir(){
    for(let i=1;i<=100;i++){
            console.log(i);
    }
}

function sumaPares(){
    let suma = 0;
    for(let i=0;i<=100;i++){
        if(i%2==0){
          suma +=i;  
        }   
    }
    return suma;
}
function sumaImpares(){
    let suma = 0;
    for(let i=0;i<=100;i++){
        if(i%2==1){
          suma +=i;  
        }   
    }
    return suma;
}

Imprimir();
console.log("la suma de los numeros pares del 0 al 100 es: "+sumaPares());
console.log("la suma de los numeros impares del 0 al 100 es: "+sumaImpares());

