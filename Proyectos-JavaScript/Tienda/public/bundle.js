'use strict';

const producto = document.getElementById('producto');
const productoImagen = producto.querySelector('.producto__imagen');
const thumbs = producto.querySelector('.producto__thumbs');

thumbs.addEventListener('click', (e)=>{
    if(e.target.tagName === 'IMG'){
        const imagenSrc = e.target.src;
        //Obtenemos la posicion del ultimo slash
        const lastIndex = imagenSrc.lastIndexOf('/');
        //Cortamos el string
        const nombreImagen = imagenSrc.substring(lastIndex + 1);
        //Cambiamos la ruta de la imagen principal
        productoImagen.src = `./img/tennis/${nombreImagen}`;
    }
});
