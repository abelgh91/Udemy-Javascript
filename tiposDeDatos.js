/* 📌 Tipos de datos que podemos guardar en las variables:
	string - Cadena de Texto
	number - Numero
	boolean - Booleano (verdadero o falso)
	object - Objeto
	function - Funciones

	null - Valor nulo
	undefined - Valor sin definir
*/
//cadena de texto
const name = 'Abel';
const paragraph = 'Esto es un parrafo';
const paragraph2 = 'Esto es un "parrafo"';
const paragraph3 = "Esto es un 'parrafo'";

//numero
const number = 4;
const number2 = -4.35;

//boolean
const userConnected = true;
const mayorQue = 10 > 2;
console.log(mayorQue)

//Arrays
const array = ['texto', 456, true, {propiedad: 'valor'}, [1, 2, 3]];
console.log(array)

//objetos
const person = {
	name: 'Abel',
	age: 32,
	car: {
		marca: 'chevrolet',
		color: 'black',
	},
};

//function
function hola() {
	console.log('Hola');
}
hola();

//null
const miVariable = null;

//undefined
//se usa cuando el valor no esta definido