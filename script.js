let resultado = document.querySelector('#display');

function insert(num) {
	resultado.innerHTML += num;
}

function apagar() {
	resultado.innerHTML = '';
}


function calcular() {
	let resultado = document.querySelector('#display').innerHTML;

	if(resultado !== '') {
		document.querySelector('#display').innerHTML = eval(resultado);
	} else {
		console.log('Nada para calcular');
		console.log("ajajajaja")
		document.querySelector('#display').innerHTML = 'Nada para calcular';
	}
}