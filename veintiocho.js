function lanzarMoneda(){
    console.log("Lanamiento de moneda");
    
    for(i=1;i<=10;i++){
        let moneda= Math.floor((Math.random()*2));
        if(moneda==1){
            console.log("Cara!");
        }else{
            console.log("Cruz!");
        }
    }
}

lanzarMoneda();