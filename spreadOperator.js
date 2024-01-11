/*
	📌 Operador Spread
	Permite tomar los elementos de un arreglo u objeto y expandirlos en otro sitio.
*/
// const fruits = ['Manzana', 'Pera', 'Piña', 'Melon'];
// const favouriteFood = ['Pizza', 'Sushi', ...fruits];
// console.log(favouriteFood)

// const loginDetails = {
//     	name: 'Abel',
//     	email: 'correo@correo.com',
//     	password: '123',
//     };

//     const user = {
//         ...loginDetails,
//         name: 'Paco',
//         age: 32,
//     };
//     console.log(user)

/*
	📌 Parametro Rest
	Permite que una funcion contenga un numero indefinido de argumentos.
	Los argumentos extra que encuentre los convertira en un arreglo.
*/
// const userRegister = (name, email, ...additionalDetails) => {
//     console.log(name, email, additionalDetails);
// };

// userRegister('Abel', 'abelgh91@gmail.com', 32, 'España');

/*
	📌 Destructuración de objetos
	Nos permite obtener elementos o propiedades de un arreglo u objeto y guardarlos en una variable.
*/
// const friends = ['Alejandro', 'Cesar', 'Manuel'];
// const firstFriend = friends[0];
// const secondFriend = friends[1];

// const [firstFriend, secondFriend, thirdFriend] = friends;
// console.log(thirdFriend)

const person = {
	name: 'Carlos',
	age: 27,
	country: 'México',
};

const {name, country, age} = person;
console.log(name, country);

const showAge = ({name, age}) => {
    console.log(`${name} tiene ${age} años`)
}
showAge(person)