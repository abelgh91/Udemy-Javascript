/* 📌 Block Scope / Alcance de tipo bloque
	- Pertenecen las variables declaradas con const o let dentro de un bloque { }
	- Solo podemos acceder a ellas dentro del bloque
*/

// const age = 19;
// if(age >= 18){
//     const accessAllowed = true;

//     if(true){
//         console.log(accessAllowed)
//     }

//     const myFunction = () => {
//         console.log(accessAllowed)
//     };
//     myFunction();
// }

// const accessAllowed = 'YES';
// console.log(accessAllowed);

if (true) {
    var name = 'Abelardo'; //las var no se encapsulan en tipo bloque
}
console.log(name)