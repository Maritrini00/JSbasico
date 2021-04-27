function esPrimo (numero){
	
	if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	
	return true;
}

const numerosParaProbar = [1, 2, 50, 51, 3, 500, 7, 1311];

numerosParaProbar.forEach(numero => {
	console.log("¿%d es primo? %s", numero, esPrimo(numero));
});