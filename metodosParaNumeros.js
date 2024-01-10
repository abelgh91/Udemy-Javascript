/*
	📌 .toString()
*/

// const number = 10;
// console.log(number, typeof number);

// const text = number.toString();
// console.log(text, typeof text)

/*
	📌 .toFixed()
	Permite obtener un numero con la cantidad de decimales especificados
*/

// const number = 3.1415;
// console.log(number.toFixed(2))

/*
	📌 parseInt()
	Intenta transformar un valor a un entero.
*/
// const number1 = parseInt(prompt('Escribe un numero'));
// const number2 = parseInt(prompt('Escribe un numero'));
// console.log(number1 + number2)

/*
	📌 .parseFloat()
	Intenta transformar un valor a un numero con decimales.
*/

// const number1 = parseFloat(prompt('Escribe un numero'));
// const number2 = parseFloat(prompt('Escribe un numero'));
// console.log(number1 + number2)

/*
	📌 Math.random()
	Genera un numero al azar entre 0 y 1
*/

// const number = Math.random();
// console.log(number)

/*
	📌 Math.floor()
	Redondea hacia abajo un numero.
*/
// console.log(Math.floor('10.1'));
// console.log(Math.floor('10.99'));

/*
	📌 Math.ceil()
	Redondea hacia arriba un numero.
*/
// console.log(Math.ceil('10.1'));
// console.log(Math.ceil('10.99'));

/*
	📌 Math.round()
	Redondea hacia el entero mas cercano
*/
// console.log(Math.round('10.1'));
// console.log(Math.round('10.99'));

/*
	📌 Ejemplo de numero al azar de 0 a 100
*/
const number = Math.random();
console.log(Math.floor(number * 101));