import { cargarAnteriorSiguiente } from "./cargarImagen";
import carousel from "./carousel";
import cerrarGaleria from "./cerrarGaleria";
import slideClick from "./slideClick";

galeria.addEventListener('click', (e)=>{
    const boton = e.target.closest('button');

    //---CERRAR GALERIA
    if(boton?.dataset?.accion === 'cerrar-galeria'){
        cerrarGaleria();
    }

    //---CAROUSEL SLIDE CLICK
    if(e.target.dataset.id){
        slideClick(e);
    }

    //---SIGUIENTE IMAGEN
    if(boton?.dataset?.accion === 'siguiente-imagen'){
        cargarAnteriorSiguiente('siguiente');
    }
    //---ANTERIOR IMAGEN
    if(boton?.dataset?.accion === 'anterior-imagen'){
        cargarAnteriorSiguiente('anterior')
    }
    //---SIGUIENTE IMAGEN CAROUSEL
    if(boton?.dataset?.accion === 'siguiente-slide'){
        carousel('adelante')
    }
    //---ANTERIOR IMAGEN CAROUSEL
    if(boton?.dataset?.accion === 'anterior-slide'){
        carousel('atras')
    }
});