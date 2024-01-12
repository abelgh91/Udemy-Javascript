/*
	📌 window.setTimeOut()
	Nos permite ejecutar una funcion despues de cierto tiempo.
*/

// const saludo = () => {
//     console.log('Hola!')
// };

// let id;
// const iniciar = () => {
//     console.log('iniciando timer');
//     id = setTimeout(saludo, 5000);
// };

// const finalizar = () => {
//     console.log('parando timer');
//     clearTimeout(id);
// };

/*
	📌 window.setInterval()
	Nos permite ejecutar una funcion cada cierto tiempo.
*/
let count = 0;
let id;

const iniciar = () => {
    id = setInterval(() => {
        console.log(count)
        count++
    }, 1000);
}

const finalizar = () => {
    console.log('parando timer')
    clearInterval(id)
}

