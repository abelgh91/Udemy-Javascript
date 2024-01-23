/*
	📌 Localstorage
	Localstorage es una API del navegador que nos va a permitir poder 
	guardar información de forma local, asi como las cookies.
*/
document.getElementById('boton1').addEventListener('click', (e)=>{
    const nombre = prompt('Escribe tu nombre');
    window.localStorage.setItem('user', nombre)
});

document.getElementById('boton2').addEventListener('click', (e)=>{
    window.localStorage.removeItem('user');
})

if(window.localStorage.user){
    console.log('Hola', window.localStorage.user)
}else{
    console.log('Hola user anonimo')
}
/*
	📌 Local Storage vs cookies

	Local Storage:
		- Se utilizan para guardar información de forma local.
		- Tiene un limite de 5mb por dominio.
		- La información de localstorage no tiene expiración. (se puede borrar con ccleaner por ejemplo)
	Cookies:
		- Se utilizan para mandar informacion entre el cliente (navegador web) y el servidor
		- Tienen un limite de 4kb.
		- Pueden tener fecha de expiración.
*/