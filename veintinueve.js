function dados(){
    cont =0;
    conicidencia =0;
    while(cont<=100){
        let dado1 = Math.floor((Math.random()*6)+1);
        let dado2 = Math.floor((Math.random()*6)+1);
        let tirada = dado1+dado2;
        if(tirada == 10){
            conicidencia++;
        }
        cont++;
    }
    console.log(`las tiradas de los 2 dados sumaron 10 ${conicidencia} veces`);
}

dados();