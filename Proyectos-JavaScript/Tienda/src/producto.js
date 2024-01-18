const producto = document.getElementById('producto');
const productoImagen = producto.querySelector('.producto__imagen');
const thumbs = producto.querySelector('.producto__thumbs');

//Color
const propiedadColor = producto.querySelector('#propiedad-color');

//Cantidad
const btnIncrementarCantidad = producto.querySelector('#incrementar-cantidad');
const btnDisminuirCantidad = producto.querySelector('#disminuir-cantidad');
const inputCantidad = producto.querySelector('#cantidad');
//Funcionalidad de los thumbnails

thumbs.addEventListener('click', (e)=>{
    if(e.target.tagName === 'IMG'){
        const imagenSrc = e.target.src;
        //Obtenemos la posicion del ultimo slash
        const lastIndex = imagenSrc.lastIndexOf('/');
        //Cortamos el string
        const nombreImagen = imagenSrc.substring(lastIndex + 1);
        //Cambiamos la ruta de la imagen principal
        productoImagen.src = `./img/tennis/${nombreImagen}`
    }
});

propiedadColor.addEventListener('click', (e)=>{
    if(e.target.tagName === 'INPUT'){

        productoImagen.src = `./img/tennis/${e.target.value}.jpg`
    }
    
});


btnIncrementarCantidad.addEventListener('click', (e)=>{
    inputCantidad.value = parseInt(inputCantidad.value) + 1;
});
btnDisminuirCantidad.addEventListener('click', (e)=>{
    if(parseInt(inputCantidad.value) > 1){
        inputCantidad.value = parseInt(inputCantidad.value) - 1;
    } 
});