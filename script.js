let resultado = document.querySelector('#display');

function insert(num) {
	resultado.innerHTML += num;
}

function apagar() {
	resultado.innerHTML = '';
}

function backspace() {
	resultado.innerHTML = resultado.innerHTML.slice(0, -1);
}


function calcular() {
	let resultado = document.querySelector('#display').innerHTML;

	if(resultado !== '') {
		document.querySelector('#display').innerHTML = eval(resultado);
	} else {
		document.querySelector('#display').innerHTML = 'Nada para calcular';
	}
}