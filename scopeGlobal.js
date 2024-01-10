/* 📌 Global Scope o Variables Globales
	- Son las variables declaradas fuera de una funcion.
	- Podemos acceder a ellas desde cualquier parte del código.
	- Podemos usar const, let y var.
*/

var name = 'Abel';
console.log(name)

const saludo = () => {
    console.log('Hola ' + name);

    name = 'María';
    console.log('El nuevo nombre es: ' + name);
};

saludo();