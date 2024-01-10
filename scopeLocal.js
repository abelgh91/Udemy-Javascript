/* 📌 Local Scope o Variables Locales
	- Son las variables declaradas dentro de una función.
	- Solo podemos acceder a ellas desde dentro de la función.
*/

var number = 1;

var getNumberLetters = (name) => {
   const number = name.length;
   console.log(`${name} tiene ${number} letras`)

   var funcionAnidada = () => {
    console.log(number);
   }
   funcionAnidada();
};
getNumberLetters('Abel');
// console.log(number); // va a salir el de la linea 5 porque es la global, la local solo la coge dentro de la funcion