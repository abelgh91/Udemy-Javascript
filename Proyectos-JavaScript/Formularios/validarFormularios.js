const formulario = document.getElementById('formulario-donacion');

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();

    const data = {
        correo: formulario.correo.value,
        pais: formulario.pais.value,
        donacion: formulario.donacion.value,
        fecha: formulario.fecha.value,
        terminos: formulario['terminos-y-condiciones'].checked
    };
    //comprobamos el correo
    if(data.correo.length <= 2){
        console.log('correo invalido');
        return;
    }

    //comprobamos el pais
    if(data.pais === ''){
        console.log('pais invalido');
        return;
    }

    //comprobamos la donacion
    if(data.donacion === ''){
        console.log('elige una donacion')
        return;
    }

    //comprobamos la fecha
    if(data.fecha === ''){
        console.log('selecciona una fecha');
        return;
    }

    //comprobamos terminos
    if(!data.terminos){
        console.log('acepta los terminos y condiciones');
        return;
    }

    console.log(data);
    console.log('enviando datos...')
});