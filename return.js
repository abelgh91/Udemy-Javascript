// const calculator = (tipo, number1, number2) => {
//     let result;

//     if(tipo === 'suma') {
//         result = number1 + number2
//     } else if (tipo === 'resta'){
//         result = number1 - number2
//     }

//     return result;
// };

const calculator = (tipo, number1, number2) => {
    if(tipo === 'suma') {
        return number1 + number2;
    } else if (tipo === 'resta'){
        return number1 - number2;
    }
};


const miVariable = calculator('suma', 100, 10);
console.log(miVariable)