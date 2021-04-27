//primo
function esPrimo (numero){
	
	if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	
	return true;
}

function probarPrimo(x){
    console.log(`El numero ${x} es primo?: ${esPrimo(x)}`);
}

/* numerosParaProbar.forEach(numero => {
	console.log("¿%d es primo? %s", numero, esPrimo(numero));
}); */


//factorial
function factorial(x){
    let total=1;
    for(let i=1;i<=x;i++){
        total=total*i;
    }
    return total;
}

function tablaMultiplicar(numero){
    for(i=0;i<=10;i++){
        console.log(numero*i);
    }
}

const readline = require('readline');

let interfazCaptura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Primo/Factorial/Tabla de Multiplicar");
interfazCaptura.question('escoge un numero: ',function(respuesta){
   probarPrimo(respuesta);
   console.log(`El factorial de ${respuesta} es ${factorial(respuesta)}`);
   console.log(`Tabla de multiplicar de ${respuesta} :`);
   tablaMultiplicar(respuesta);
    

    interfazCaptura.close();
});