const createCookies = () => {
    // document.cookie = 'nombre=Abel';
    document.cookie = 'nombre=Abel; expires=1 Jan 2025 01:00:00 UTC'; 
}

const iniciarSesion = () => {
    const user = prompt('User')
    document.cookie = `nombre=${user}; expires=1 Jan 2025 01:00:00 UTC`; 
    alert('Sesion iniciada')
}

// console.log(document.cookie)

/*
	Forma para obtener el usuario de las cookies.
*/

let user;

const cookies = document.cookie.split(';');

cookies.forEach((cookie) => {
    const propiedad = cookie.split('=')[0];
    if(propiedad == 'nombre'){
        user = cookie.split('=')[1]
    }
})

if(user){
    console.log('Hola '+ user)
}else{
    console.log('Por favor, inicie sesión')
}

const cerrarSesion = () =>{
    document.cookie = 'nombre=; expires=1 Jan 2024 01:00:00 UTC';
    console.log('Hasta luego')
}