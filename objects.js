const personaArreglo = ['Carlos', 27, 'correo@correo.com', true, true];

const person = {
    name: 'Abel',
    age: 32,
    email: 'abelgh91@gmail.com',
    suscriptions: {
        web: true,
        email: true,
    },
    favouritesColors: ['negro', 'rojo', 'verde', 'azul'],
    saludo: function() {
        alert('Hola!');
    }
};

// console.log(person['age'])
// console.log(person.suscriptions.email)

const variable = 'suscriptions';
// console.log(person[variable]);

person.country = 'Spain';
console.log(person)

person.saludo();