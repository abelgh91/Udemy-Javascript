/* 📌 .indexOf()
	Obtenemos el primer index de un elemento.
	Si no hay elemento nos retorna -1
*/

const names = ['Carlos', 'Rafael', 'Estefania', 'Rodrigo', 'Rafael', 'Gema', 'Diana', 'Sara'];
// console.log(names.indexOf('Estefania'));

/* 
	📌 .lastIndexOf() 
	Obtenemos el último index de un elemento.
*/

// console.log(names.lastIndexOf('Rafael'));

/* 	
	📌 .forEach()
	Nos permite ejecutar una funcion por cada elemento
*/

// names.forEach((name, index) => {
//     console.log(`Hola ${name}, eres el/la numero ${index}`)
// });

/* 
	📌 .find()
	Nos permite recorrer un arreglo y devuelve el PRIMER elemento que retornemos.
*/

// const result = names.find((name) => {
//     if(name[0] === 'R'){
//         return name;
//     }
// });
// console.log(result)

/* 
	📌 .map()
	Nos permite ejecutar una función por cada elemento y crear un nuevo arreglo
	en base a los resultados de esa función.
*/

// const namesUpper = names.map((name) => name.toUpperCase());
// console.log(namesUpper)

/* 📌 .filter()
	Nos permite ejecutar una función por cada elemento 
	y luego crear un arreglo en base a los resultados de esa función. 
*/

// namesFourLetters = names.filter((name) => {
//     if(name.length === 5) {
//         return name;
//     }
// });
// console.log(namesFourLetters)

/*filter va a devolver los elementos que cumplan la condicion
que le hayamos puesto en un array, mientras que map va a devolver
todos los elementos que tengamos en el array*/ 

/* 
	📌 .includes()
	Nos permite saber si el arreglo contiene un elemento especificado 
*/

// console.log(names.includes('Diana'));

/* 
	📌 .every()
	Nos permite ejecutar un condicional sobre cada elemento y 
	nos devuelve true si TODOS los elemento cumplieron la condición.
*/

// const validNames = names.every((name) => {
//     if (typeof name === 'string') {
//         return true;
//     } else {
//         return false;
//     }
// });

// console.log('Todos los elementos son validos? ' + validNames)

/* 
	📌 .some()
	Nos permite ejecutar un condicional sobre cada elemento y
	nos devuelve true si algun elemento cumplio la condición.
*/


const validNames = names.some((name) => {
    if (typeof name !== 'string') {
        return true;
    } else {
        return false;
    }
});

console.log('el arreglo es invalido? ' + validNames)