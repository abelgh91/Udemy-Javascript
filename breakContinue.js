/* 
	📌 Break
	La sentencia break nos sirve para salir de bloques de tipo Switch.
	Pero tambien nos sirve para forzar la salida de un ciclo.
*/

// const names = ['Arturo', 'Andres', 'Alejandro', 'Roberto', 'Adrian', 'Antonio', 'Angel'];

// for(let i=0; i < names.length; i++){
//     if(names[i][0] !=='A'){
//         console.log('Alto! Hay un nombre que no empieza con la letra A');
//         console.log(names[i] + ' no empieza por la letra A')
//         break
//     };
//     console.log(names[i]);
// }

/* 
	📌 Continue
	La sentencia continue nos sirve para saltar a la siguiente iteración.
*/

const invitados = ['Carlos', 'Christian', 'Christoher', 'Jorge', 'Estefania', 'Erika', 'Manuel'];
console.log('Lista de personas aceptadas:');

for(let i = 0; i < invitados.length; i++){
    if(invitados[i] === 'Jorge'){
        continue;
    }
    console.log(invitados[i])
}