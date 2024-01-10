const colors = ['rojo', 'verde', 'azul'];

/* 
	📌 .length 
	(propiedad) - Nos permite conocer la cantidad de elementos de un arreglo.
*/

console.log(colors.length);

/*
	📌 .toString() 
	Nos permite transformar un arreglo a una cadena de texto.
	Por ejemplo para poder mostrarlo en el navegador.
*/

// document.body.innerHTML = colors.toString();

/*
	📌 .join()
	Nos permite transformar un arreglo a una cadena de texto y separar cada elemento. 
*/

console.log(colors.join('-'))

/*
	📌 .sort()
	Nos permite ordenar un arreglo de cadenas de texto o numeros.
*/
const letters =['c', 'h', 'i', 'e'];
console.log(letters.sort())

/*
	📌 .reverse()
	Nos permite ordenar un arreglo de forma descendente. 
*/

console.log(letters.reverse());

/*
	📌 .concat()
	Nos permite juntar dos arreglos en uno solo. 
*/

const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];
const array3 = array1.concat(array2);

console.log(array3);

/* 
	📌 .push()
	Nos permite agregar un elemento al final de un arreglo.
*/

colors.push('lila');
console.log(colors)

/*
	📌 .pop()
	Nos permite eliminar el ultimo elemento de un arrreglo. 
*/
colors.pop();
console.log(colors);

/* 
	📌 .shift()
	Elimina el primer elemento de un arreglo y recorre los elementos.
*/

const days = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
const deletesDays = days.shift();
console.log(deletesDays)
console.log(days[0]);

/*
	📌 .unshift()
	Agrega un elemento al inicio del arreglo y empuja los elementos.
*/

days.unshift('abel');
console.log(days);

/* 
	📌 .splice()
	Nos permite insertar elementos a un arreglo donde le especifiquemos.
	- 1er parametro - Posición donde queremos comenzar a insertar los elementos.
	- 2do parametro - Si queremos eliminar elementos del arreglo desde la posición indicada.
	- Resto de parametros - Los elementos a insertar.
*/

const friends = ['alejandro', 'cesar', 'manuel'];
friends.splice(1, 2, 'raul', 'roberto');
console.log(friends)

/* 📌 .slice()
	Nos permite copiar una parte de un arreglo a otro.
	- 1er parametro - Posición desde donde queremos copiar.
	- 2do parametro - Hasta antes de que elemento copiar.
*/

const fruits = ['platano', 'naranja', 'uva', 'manzana', 'piña', 'mango'];
favouritesFruits = fruits.slice(1, 5);
console.log(favouritesFruits)