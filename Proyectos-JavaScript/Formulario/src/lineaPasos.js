import validarCantidad from "./validaciones/validarCantidad";
import validarCorreo from "./validaciones/validarCorreo";
import validarNombre from "./validaciones/validarNombre";

const linea = document.getElementById('linea-pasos');
linea.addEventListener('click', (e)=>{
    if(!e.target.closest('.linea-pasos__paso')) return;

    const pasoActual = document.querySelector('.linea-pasos__paso-check--active').closest('.linea-pasos__paso').dataset.paso;

    //validamos el paso actual
    if(pasoActual === 'cantidad'){
        if(!validarCantidad()) return;
    }else if(pasoActual === 'datos'){
        if(!validarNombre() || !validarCorreo()) return;
    }
    
    //obtenemos el paso al que queremos navegar
    const pasoANavegar = e.target.closest('.linea-pasos__paso');

    // Comprobamos si el paso tiene el icono de check.
	// Solo queremos poder dar click a los que tienen check.
    if(pasoANavegar.querySelector('.linea-pasos__paso-check--checked')){
        const pasoActual = linea.querySelector('.linea-pasos__paso-check--active');
        pasoActual.classList.remove('linea-pasos__paso-check--active');

        //obtenemos el id del paso a navegar
        const id = pasoANavegar.dataset.paso;

        //agregamos la clase active al nuevo paso
        linea.querySelector(`[data-paso=${id}] span`).classList.add('linea-pasos__paso-check--active');

        
        const btnFormulario = document.querySelector('#formulario__btn');
        btnFormulario.querySelector('span').innerText = 'Siguiente';

        btnFormulario.querySelector('[data-icono="banco"]').classList.remove('formulario__btn-contenedor-icono--active');
        btnFormulario.querySelector('[data-icono="siguiente"]').classList.add('formulario__btn-contenedor-icono--active');
        btnFormulario.classList.remove('formulario__btn--disabled');
        //navegamos al paso
        document.querySelector(`.formulario__body [data-paso="${id}"]`).scrollIntoView({
            inline: 'start',
            behavior: 'smooth'
        });
    }
})