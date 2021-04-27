function Imprimir(){
    cont=0;
    for(let i=1;i<=100;i++){
        if(i%2==0 || i%3==0){
            console.log(i);
            cont++;
        }
    }
    console.log(`Existen ${cont} numeros multiplos de 2 y 3 entre el 1 y el 100`);
}

Imprimir();
