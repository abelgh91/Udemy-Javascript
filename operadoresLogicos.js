/* 📌 Operadores Lógicos 
	&& 	And
	||	OR
	! 	NOT
*/
const name = 'Maria';
const age = 17;
const hasTicket = true;
const haspermission = true;

//ejemplo 1
// const allowAccess = age >= 18 && hasTicket;
console.log('Acceso permitido al concierto: '+ allowAccess);

//ejemplo 2
const allowAccess = (age >= 18 && hasTicket) || (haspermission && hasTicket);
console.log('Acceso permitido al concierto: '+ allowAccess);

//ejemplo 3
const variable = true;
console.log(!variable);
