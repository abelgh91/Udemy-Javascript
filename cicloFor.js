const names = ['Carlos', 'Christian', 'Christoher', 'Estefania', 'Erika', 'Manuel', 'Diego'];
// names.forEach((name)=> { //forEach es para arrays
//     console.log(name);
// });

/* 
	📌 Ciclo For
	Repite un bloque de código mientras se cumpla una condición.

	Expresión 1: Se ejecuta una sola vez antes de comenzar a repetir el bloque de código.
	Expresión 2: Una condicion, mientras se cumpla se ejecutará el bloque de código.
	Expresión 3: Esta expresion se ejecuta siempre y despues de que se ejecute el bloque de código.
*/

// for(let number = 1; number <= 10; number ++){
//     console.log(number);
// };

// for (let number = 50; number > 0; number--){
//     console.log(number)
// };

for(let number = 0; number < names.length; number++){
    console.log(names[number])
}