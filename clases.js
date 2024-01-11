/*
	📌 Estructura de una clase:
	- Definición
	- Propiedades: La clase puede contener variables. Dentro de una clase se llaman propiedades.
	- Constructor: Es un metodo especial para inicializar un objeto creado a partir de una clase.
	- Métodos: La clase puede contener funciones. Dentro de una clase se llaman metodos.
*/
class User {
    tipo = 'user';

    constructor(name, surname){
        this.name = name;
        this.surname = surname;

        console.log('Nuevo user registered')
    }

    getFullName(){
        console.log('Obteniendo datos...')
        return `${this.name} ${this.surname}`
    }
}

const user = new User('Abel', 'Garcia');
console.log(user.getFullName())

const user2 = new User('Maria', 'Luquero');
console.log(user2.getFullName())