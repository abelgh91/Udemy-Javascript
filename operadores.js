// Los operadores nos permiten asignar elementos, hacer cálculos básicos y comparaciones.

/* 📌 Operadores Aritmeticos
	=	Operador de asignación. Se usa para asignar valores a una variable
	+	Suma
	-	Resta
	*	Multiplicación
	/	Division
	%	Modulo
	++	Aumento
	--	Disminución
*/

const result = 10 + 10;
const result2 = 10 - 10;
const result3 = 10 % 3;
let number = 1;
number--;

/*📌 Operadores de Asignación
	+=	Suma un numero al valor de una variable.
	-=	Resta un numero al valor de una variable.
	*=	Resta un numero al valor de una variable.
	/=	Resta un numero al valor de una variable.
	%=	Obtiene el sobrante de una division y lo asigna a la variable.
*/

let number2 = 10;
number2 -= 5;
// number2 = number2 + 5;


/* 📌 Operadores de Comparación:
Nos permiten comparar valores
	==		Igual que
	===		Igual en valor y tipo de valor
	!=		Diferente
	!==		Diferente en valor y diferente en typo
	>		Mayor que
	<		Menor que
	>=		Mayor o igual que
	<=		Menor o igual que
	?		Operador ternario
*/

// const resultado = 5 > 1; //true
// const resultado = 20 <= 20; //true
// const resultado = 10 == 10; (solo compara el valor)
// const resultado = 10 === '10'; (compara valor y tipo)

const resultado = 7 > 10 ? 'el primer valor es mayor que el segundo' : 'el segundo valor es mayor que el primero';

console.log(resultado)
