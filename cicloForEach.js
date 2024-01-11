/*
	📌 Ciclo forEach
	Es un método de los arreglos que podemos usar para recorrer los elementos.
*/
// const friends = ['Alejandro', 'Cesar', 'Manuel'];
// friends.forEach((friend, index)=> console.log(`el amigo ${index} es: ${friend}`))
/*
	📌 Ciclo for in
	Nos permite recorrer las propiedades de un objeto.
*/
// const person = {
//     	nombre: 'Carlos',
//     	edad: 27,
//     	correo: 'correo@correo.com',
//     };
//     for(propiedad in person){
//         (person[propiedad]) = ' '
//     }
//     console.log(person)

/*
	📌 Ciclo for of
	Nos permite recorrer los valores de un objeto iterable.
	Podemos recorrer: Arreglos, Cadenas de Texto, Mapas y Listas de Nodos, etc
*/
const etiquetas = document.head.children;
console.log(etiquetas);

// etiquetas.forEach((etiqueta) => {
// 	console.log(etiqueta);
// });

// for (elemento of etiquetas) {
// 	console.log(elemento);
// }

[...etiquetas].forEach((elemento) => console.log(elemento));