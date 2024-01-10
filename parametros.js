// const saludo = (name) => {
//     console.log(`Hola ${name}`)
// };

// saludo('Abel');
// saludo('Maria');

/*
 Multiples parametros
*/

const calculator = (tipo, number1, number2) => {
    if(tipo === 'suma') {
        console.log(number1 + number2);
    } else if (tipo === 'resta'){
        console.log(number1 - number2);
    }
};

calculator('suma', 2, 5)
calculator('resta', 8554, 2546)