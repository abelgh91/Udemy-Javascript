const user = {
	name: 'Carlos',
	age: 27,
	friends: ['Alejandro', 'Cesar', 'Manuel'],
	saludo: () => {
		console.log('Hola!');
	},
};

/*
	📌 Métodos propios
	Los objetos pueden tener métodos personalizados.
*/

// user.saludo();

/*
	📌 Object.keys()
	Nos devuelve un arreglo con las llaves (keys) del objeto.
*/

// const result = Object.keys(user);

/*
	📌 Object.values()
	Nos devuelve un arreglo con los valores (values) del objeto.
*/

// const result = Object.values(user);


/*
	📌 Object.entries()
	Nos devuelve un arreglo con las parejas de clave y valor del objeto.
*/

const result = Object.entries(user);

console.log(result)
console.log(`el objeto tiene ${result.length} propiedades`)