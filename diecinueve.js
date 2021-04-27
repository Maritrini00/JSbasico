function reloj(){
    let fecha = new Date();
    let hora = fecha.getHours();
    let minuto = fecha.getMinutes();
    let segundo = fecha.getSeconds();
    
    if(hora<10){
        hora = "0" + hora;
    }
    if(minuto<10){
        minuto = "0" + minuto;
    }
    if(segundo<10){
        segundo = "0" + segundo;
    }
    

    let tiempo = hora + ":" + minuto + ":" + segundo;
    console.log(tiempo);
    
    setTimeout(reloj,1000);

}

reloj();