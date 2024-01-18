'use strict';

const producto$1 = document.getElementById('producto');
const productoImagen = producto$1.querySelector('.producto__imagen');
const thumbs = producto$1.querySelector('.producto__thumbs');

//Color
const propiedadColor = producto$1.querySelector('#propiedad-color');

//Cantidad
const btnIncrementarCantidad = producto$1.querySelector('#incrementar-cantidad');
const btnDisminuirCantidad = producto$1.querySelector('#disminuir-cantidad');
const inputCantidad = producto$1.querySelector('#cantidad');
//Funcionalidad de los thumbnails

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

propiedadColor.addEventListener('click', (e)=>{
    if(e.target.tagName === 'INPUT'){

        productoImagen.src = `./img/tennis/${e.target.value}.jpg`;
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

var data = {
    productos: [
        {
            id: '1',
            nombre: 'Tennis Converse Standard.',
            descripcion: 'Lorem ipsum dolor sit amet.',
            precio: 90.00,
            colores: ['negro', 'rojo', 'amarillo'],
            tamaños: ['38', '39', '40', '41', '42', '43'],
        },
    ],
};

const botonesAbrirCarrito = document.querySelectorAll('[data-accion="abrir-carrito"]');
const botonesCerrarCarrito = document.querySelectorAll('[data-accion="cerrar-carrito"]');
const ventanaCarrito = document.getElementById('carrito');
const btnAgregarCarrito = document.getElementById('agregar-al-carrito');
const producto = document.getElementById('producto');
let carrito = [];
const formatearMoneda = new Intl.NumberFormat('es-ES', {style: 'currency', currency: 'EUR'});
const notificacion = document.getElementById('notificacion');

const renderCarrito = () => {
    ventanaCarrito.classList.add('carrito--active');

    //eliminamos todos los productos anteriores para construir el carrito desde cero
    const productosAnteriores = ventanaCarrito.querySelectorAll('.carrito__producto');
    productosAnteriores.forEach(producto => producto.remove());

    let total = 0;

    //comprobamos si hay productos
    if(carrito.length < 1){
        //ponemos la clase del carrito vacio
        ventanaCarrito.classList.add('carrito--vacio');
    }else {
        //eliminar la clase del carrito vacio
        ventanaCarrito.classList.remove('carrito--vacio');
        //iteramos sobre cada prodcuto del carrito y lo mostramos
        carrito.forEach((productoCarrito)=>{

        /*obtenemos el precio del producto del archivo producto.js
        cuando el id del item del carrito sea el mismo que alguno de la lista*/ 
        data.productos.forEach((productoBaseDatos)=>{
            if(productoBaseDatos.id == productoCarrito.id){
                productoCarrito.precio = productoBaseDatos.precio;

                total += productoBaseDatos.precio * productoCarrito.cantidad;
            }
        });

        //establecemos la ruta de la imagen que vamos a querer mostrar
        let thumbSrc = producto.querySelectorAll('.producto__thumb-img')[0].src;
        if(productoCarrito.color === 'rojo'){
            thumbSrc = './img/thumbs/rojo.jpg';
        }else if(productoCarrito.color === 'amarillo'){
            thumbSrc = './img/thumbs/amarillo.jpg';
        }

        //creamos una plantilla HTML
        const plantillaProducto = `
        <div class="carrito__producto-info">
			<img src="${thumbSrc}" alt="" class="carrito__thumb" />
			<div>
				<p class="carrito__producto-nombre">
					<span class="carrito__producto-cantidad">${productoCarrito.cantidad} x </span>${productoCarrito.nombre}
				</p>
				<p class="carrito__producto-propiedades">
					Tamaño:<span>${productoCarrito.tamaño}</span> Color:<span>${productoCarrito.color}</span>
				</p>
			</div>
		</div>
		<div class="carrito__producto-contenedor-precio">
			<button class="carrito__btn-eliminar-item" data-accion="eliminar-item-carrito">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					viewBox="0 0 16 16"
				>
				<path
					d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
				/>
				</svg>
			</button>
			<p class="carrito__producto-precio">${formatearMoneda.format(productoCarrito.precio * productoCarrito.cantidad)}</p>
		</div>
        `;

        //Creamos un div
        const itemCarrito = document.createElement('div');

        //le agregamos la clase de carrito_producto
        itemCarrito.classList.add('carrito__producto');

        //le metemos la plantilla
        itemCarrito.innerHTML = plantillaProducto;

        //agregamos el producto
        ventanaCarrito.querySelector('.carrito__body').appendChild(itemCarrito);
        });
    }

    ventanaCarrito.querySelector('.carrito__total').innerText = formatearMoneda.format(total);

};

//Abrir carrito
botonesAbrirCarrito.forEach((boton) => {
    boton.addEventListener('click', (e)=>{
        renderCarrito();
    });
});

//Cerrar carrito
botonesCerrarCarrito.forEach((boton) => {
    boton.addEventListener('click', (e)=>{
        ventanaCarrito.classList.remove('carrito--active');
    });
});

btnAgregarCarrito.addEventListener('click', (e)=>{
    const id = producto.dataset.productoId;
    const nombre = producto.querySelector('.producto__nombre').innerText;
    const cantidad = parseInt(producto.querySelector('#cantidad').value);
    const color = producto.querySelector('#propiedad-color input:checked').value;
    const tamaño = producto.querySelector('#propiedad-tamaño input:checked').value;

    if(carrito.length > 0){
        let productoEnCarrito = false;
        carrito.forEach(item =>{
            if(item.id === id && item.nombre === nombre && item.color === color && item.tamaño === tamaño){
                item.cantidad += cantidad;
                productoEnCarrito = true;
            }
        });
        if(!productoEnCarrito){
            carrito.push({
                id: id,
                nombre: nombre,
                cantidad: cantidad,
                color: color,
                tamaño: tamaño
            });
        }
    }else {
        carrito.push({
            id: id,
            nombre: nombre,
            cantidad: cantidad,
            color: color,
            tamaño: tamaño
        });
    }

    //establecemos la ruta de la imagen que queremos mostrar
    let thumbSrc = producto.querySelectorAll('.producto__thumb-img')[0].src;
    if(color === 'rojo'){
        thumbSrc = './img/thumbs/rojo.jpg';
    }else if(color === 'amarillo'){
        thumbSrc = './img/thumbs/amarillo.jpg';
    }
    notificacion.querySelector('img').src = thumbSrc;

    //mostramos la notificacion
    notificacion.classList.add('notificacion--active');

    //despues de 3 segundos la ocultamos
    setTimeout(() => notificacion.classList.remove('notificacion--active'), 2000);
});

//Botones para eliminar productos del carrito
ventanaCarrito.addEventListener('click', (e) =>{
    if(e.target.closest('button')?.dataset.accion === 'eliminar-item-carrito'){
        const producto = e.target.closest('.carrito__producto');
        const indexProducto = [...ventanaCarrito.querySelectorAll('.carrito__producto')].indexOf(producto);
        carrito = carrito.filter((item, index)=>{
            if(index !== indexProducto){
                return item;
            }
        });
        renderCarrito();
    }
});

//boton de enviar carrito
ventanaCarrito.querySelector('#carrito__btn-comprar').addEventListener('click', ()=>{
    console.log('enviado peticion de compra!');
    console.log(carrito);
});

class Tabs {
    constructor(idElemento){
        this.tabs = document.getElementById(idElemento);
        this.nav = this.tabs.querySelector('.tabs');

        //comprobamos que el elemento que clickemos tenga la clase tabs__link
        this.nav.addEventListener('click', (e)=>{
            if([...e.target.classList].includes('tabs__button')){
                //obtenemos la tab q queremos mostrar
                const tab = e.target.dataset.tab;

                //quitamos la clase activa de alguna otra que la tenga
                if(this.tabs.querySelector('.tab--active')){
                    this.tabs.querySelector('.tab--active').classList.remove('tab--active');
                }
                
                if(this.tabs.querySelector('.tabs__button--active')){
                    this.tabs.querySelector('.tabs__button--active').classList.remove('tabs__button--active');
                }

                //agregamos la clase activa al tab
                this.tabs.querySelector(`#${tab}`).classList.add('tab--active');

                //agregamos la clase active al boton
                e.target.classList.add('tabs__button--active');
            }        });
    }
}

new Tabs('mas-informacion');
