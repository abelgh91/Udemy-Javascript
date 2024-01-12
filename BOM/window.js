// console.log(`la ventana de tu navegador mide ${window.innerWidth} px de ancho`);
// console.log(`la ventana de tu navegador mide ${window.innerHeight} px de alto`);

/* 
	📌 window.open()
	Nos permite abrir ventanas del navegador
	Nota: Es posible que el navegador te pida permisos para abrir una nueva ventana.

	- 1er parametro: Dirección de la nueva ventana
	- 2do parametro: Nombre de la ventana
	- 3er parametro: Cadena de texto de opciones

	Nos devuelve un objeto para aceder a esa ventana
*/

let ventana;
const openWindow = () => {
    ventana = window.open('', 'nueva ventana');
    ventana.document.write('<h1>Hola, escribiendo en la nueva ventana</h1>');
};

const closeWindow = () => {
    ventana.close();
};
/*
	📌 Screen Object
	Representa la pantalla del usuario.
*/
console.log('Ancho de pantalla:', window.screen.width)
console.log('Alto de pantalla:', window.screen.height)

console.log('Ancho de pantalla sin barra de window:', window.screen.availWidth)
console.log('Alto de pantalla sin barra de window:', window.screen.availHeight)