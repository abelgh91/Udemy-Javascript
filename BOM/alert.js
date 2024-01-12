/*
	📌 Alerta
	Para informarle al usuario de algo.
*/
// alert('Hola usuario!');
/*
	📌 Ventana de confirmación
	Una ventana donde el usuario puede aceptar o cancelar.
	Retorna verdadero o falso dependiendo de la respuesta del usuario.
*/
// const ingresar = () => {
//     const accesoPermitido = confirm('Eres mayor de edad?');
//     if(accesoPermitido){
//         alert('Bienvenido!')
//     } else {
//         alert('Fuera de aqui!')
//     }
// }
/*
	📌 Ventana con input
	Una ventana donde el usuario puede introducir un valor
	Retorna una cadena de texto con la respuesta del usuario.
*/
const saludo = () => {
    const name = prompt('Escribe tu nombre');
    alert(`Bienvenido ${name}`)
}