/*
	📌 Operadores de Comparación:
	==		Igual que
	===		Igual en valor y tipo de valor (estrictamente igual)
	!=		Diferente
	!==		Diferente en valor y diferente en tipo
	>		Mayor que
	<		Menor que
	>=		Mayor o igual que
	<=		Menor o igual que
	?		Operador ternario

	📌 Operadores Lógicos 
	&& 	And
	||	OR
	! 	NOT
*/

// 📌 Estructura de una condicional
// if (true) {
// Código a ejecutar
// }

// 📌 Ejemplo #1:
// const user = {
// 	age: 17,
// 	country: 'Mexico',
// 	ticket: true,
// };

// if(user.age > 17) {
//     console.log('El usuario es mayor de edad y puede entrar al concierto')
// }else {
//     console.log('El usuario no es mayor de edad y no puede entrar al concierto')
// }

// 📌 Ejemplo #2:

// const user = {
// 	age: 27,
// 	country: 'Mexico',
// 	ticket: true,
// };

// if(user.age >= 18 && user.ticket) {
//     console.log('El usuario es mayor de edad y tiene un ticket')
// } else {
//     console.log('El usuario es menor de edad o no tiene un ticket')
// }

// 📌 Ejemplo #3:

// const user = {
// 	age: 27,
// 	country: 'Mexico',
// 	ticket: true,
// };

// if(user.age >= 18){
//     if(user.ticket){
//         console.log('El usuario es mayor de edad y tiene un ticket')
//     } else {
//         console.log('El usuario es mayor de edad, pero no tiene un ticket')
//     }
// } else {
//     console.log('El usuario es menor de edad')
// }

// 📌 Ejemplo #4:

const user = {
	age: 27,
	country: 'Argentina',
	ticket: true,
};

if(user.country === 'Mexico'){
    console.log('El user es mexicano');
} else if (user.country === 'Colombia') {
    console.log('El user es colombiano');
} else if (user.country === 'España') {
    console.log('El user es español');
} else {
    console.log('El user es de otro país');
}