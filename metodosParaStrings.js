/*
	📌 .length - Devuelve el número de caracteres de una cadena de texto.
*/
// const text = 'Hola soy Abel';
// console.log(text.length);

/*
	📌 .indexOf() .lastIndexOf() - Devuelve el index del primer/último caracter especificado.
*/
// const text = 'Hola soy Abel';
// console.log(text.indexOf('a'));
// console.log(text.lastIndexOf('e'));

/*
	📌 .slice() - Devuelve un fragmento de una cadena de texto.
	1er parametro - index desde donde queremos cortar
	2do parametro (opcional) - index hasta donde queremos cortar
*/

// const text = 'Hola soy Abel ';
// const index = text.indexOf('s');
// const lastIndex = text.lastIndexOf('l');
// console.log(text.slice(index, lastIndex + 1));
// console.log(text.slice(-9, -1));

/*
	📌 .replace() - Devuelve una cadena de texto en donde remplaza un valor por otro.
	1er parametro - el texto que queremos remplazar
	2do parametro - el texto que queremos poner
*/

// const text = 'Hola soy Abel';
// console.log(text.replace('Abel', 'María'));

/*
	📌 .split() - Convierte una cadena de texto en un arreglo.
	Tenemos que especificar donde cortar cada elemento.

	1er parametro - el caracter que funcionara como separador.
*/

// const text = 'Hola soy Abel';
// console.log(text.split('-'));

/*
	📌 .toUpperCase() .toLowerCase()
	Devuelve una cadena de texto de puras minisculas/mayusculas.
*/
// const text = 'Hola soy Abel';
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());

/*
	📌 Métodos para eliminar espaciados:
	.trim() - Devuelve una cadena de texto (String)	
	que elimina los espacios en blanco al inicio y final de una cadena de texto.

	.trimStart() - Igual que .trim() pero solo elimina espacios del inicio.
	.trimEnd() - Igual que .trim() pero solo elimina espacios del final.
*/
const text = ' Hola soy Abel ';
console.log(texto);
console.log(texto.trim());
console.log(texto.trimStart());
console.log(texto.trimEnd());