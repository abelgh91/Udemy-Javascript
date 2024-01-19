const formulario = document.getElementById('formulario-donacion');

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();

    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

    const data = {
        correo: formulario.correo.value,
    };
    
    //comprobamos el correo
    if(!expresionRegular.test(data.correo)){
        console.log('correo invalido');
        return;
    }

    console.log(data);
    console.log('enviando datos...')
});