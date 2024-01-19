const formulario = document.forms['formulario-donacion'];
/*
	📌 Evento submit
	Nos permite detectar cuando el usuario intenta enviar un formulario.
*/
formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log('enviando formulario')
});
/*
	📌 Evento Change
	Nos permite detectar cuando hay un cambio en el valor de un input, select o textarea.
	Se ejecuta cuando cambiamos el valor del input y damos click fuera.
*/
formulario.pais.addEventListener('change', (e)=>{
    console.log('el pais cambio');
    console.log('el nuevo pais es: ' + e.target.value)
});

formulario['cantidad-5'].addEventListener('change', ()=> console.log('la cantidad cambio'));
formulario['cantidad-10'].addEventListener('change', ()=> console.log('la cantidad cambio'));
/*
	📌 Evento Focus
	Nos permite detectar cuando un input recibe el foco de atención.
*/
formulario.correo.addEventListener('focus', ()=>{
    console.log('el input correo ahora es el foco de atencion')
})
formulario.correo.addEventListener('blur', ()=>{
    console.log('el input correo ya no es el foco de atencion')
})
/*
	📌 Evento keydown
	Nos permite detectar cuando una tecla es presionada sobre un input.
*/
formulario.correo.addEventListener('keydown', (e) => {
	console.log(e);
});

/*
	📌 Evento keyup
	Se ejecuta cuando un una tecla es levantada al escribir sobre un input.
*/
formulario.correo.addEventListener('keyup', (e) => {
	console.log(e);
});