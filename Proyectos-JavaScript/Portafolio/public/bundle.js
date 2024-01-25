'use strict';

/**
 * Funcion que se encarga de animar nuestros textos.
 * @param {DOMElement} texto Elemento del dom que queremos animar.
 */

const animarTexto = (texto, delay = 0) => {
	const numeroDeLetras = texto.dataset.texto.length;

	// Activamos el cursor cuando comienza la animacion.
	const cursor = texto.querySelector('.hero__cursor');
	cursor.classList.add('hero__cursor--visible');

	// Por cada letra, la agregamos al DOM con 100ms de separacion.
	for (let i = 0; i < numeroDeLetras; i++) {
		setTimeout(() => {
			const letra = document.createElement('span');
			letra.append(texto.dataset.texto[i]);
			texto.append(letra);
		}, 150 * i);
	}

	// Cambiamos la clase del cursor cuando termine la animacion de letras.
	setTimeout(() => {
		// Obtenemos los cursores.
		const cursores = [...texto.closest('.hero__header').querySelectorAll('.hero__cursor')];
		// Obtenemos el index del cursor actual.
		const indexCursorActual = cursores.indexOf(cursor);

		// Comprobamos que el cursor no sea el ultimo.
		if (indexCursorActual < cursores.length - 1) {
			// Si no es el ultimo, ocultamos el cursor.
			cursor.classList.remove('hero__cursor--visible');
		} else {
			// Si es el ultimo, le ponemos la clase de active.
			cursor.classList.add('hero__cursor--active');
		}
	}, 150 * numeroDeLetras);

	// Retornamos una promesa para saber cuando la animacion acabo.
	return new Promise((resolve) => setTimeout(resolve, 150 * numeroDeLetras));
};

const galeria = document.getElementById('trabajos');

const observer = new IntersectionObserver((entries)=>{
    if(entries[0].isIntersecting){
        const trabajos = galeria.querySelectorAll('.trabajos__imagenes a');
        trabajos.forEach((trabajo, index)=>{
            setTimeout(() => {
                trabajo.classList.add('trabajos__trabajo--visible');
            }, 300 * index);
            
        });
    }
}, {
    rootMargin: '0px',
    threshold: 0.4,
});

observer.observe(galeria);

const trabajos = document.getElementById('trabajos');
const ventanaTrabajos = document.getElementById('ventana-trabajos');

const data = [
    {
        id: '1',
        title: 'Trabajo #1',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?',
        fecha: '21 de Enero de 2024'
    },
    {
        id: '2',
        title: 'Trabajo #2',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?',
        fecha: '21 de Enero de 2024'
    },
    {
        id: '3',
        title: 'Trabajo #3',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?',
        fecha: '21 de Enero de 2024'
    },
    {
        id: '4',
        title: 'Trabajo #4',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?',
        fecha: '21 de Enero de 2024'
    },
    {
        id: '5',
        title: 'Trabajo #5',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?',
        fecha: '21 de Enero de 2024'
    },
    {
        id: '6',
        title: 'Trabajo #6',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?',
        fecha: '21 de Enero de 2024'
    },
];

trabajos.addEventListener('click', (e)=>{
    e.preventDefault();
    const trabajoClick = e.target.closest('.trabajos__trabajo');

    if(trabajoClick){
        // Obtenemos el id del trabajo clickeado
        const id = trabajoClick.dataset.id;

        const trabajosFiltrados = data.filter((trabajo)=>{
            if(trabajo.id === id){
                return trabajo;
            }
        });
        const {title, fecha, texto} = trabajosFiltrados[0];

        ventanaTrabajos.querySelector('.ventana__titulo').innerText = title;
        ventanaTrabajos.querySelector('.ventana__fecha').innerText = fecha;
        ventanaTrabajos.querySelector('.ventana__parrafo').innerText = texto;
        ventanaTrabajos.querySelector('.ventana__imagen').src = trabajoClick.querySelector('img').src;

        ventanaTrabajos.classList.add('ventana--active');
    }
});

// Eventlistener para cerrar ventana con el boton.
ventanaTrabajos.querySelector('button[data-action="cerrar-ventana"]').addEventListener('click', (e)=>{
    e.preventDefault();
    ventanaTrabajos.classList.remove('ventana--active');
});
    // Eventlistener para cerrar ventana con el overlay.
ventanaTrabajos.querySelector('.ventana__overlay').addEventListener('click', (e) => {
	e.preventDefault();
	if (e.target.matches('.ventana__overlay')) {
		ventanaTrabajos.classList.remove('ventana--active');
	}
});

const slider = document.getElementById('slider');

let clickPresionado = false;
let coordenadaInicial;
let scrollLeft;

const presiona = (e) => {
    // console.log('presiona');
	clickPresionado = true;

	// e.pageX - Coordenada horizontal del evento. En que coordenada dimos click con respecto al documento.
	// slider.offsetLeft - El espacio entre el slider y la parte izquierda del documento.
	coordenadaInicial = e.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;

	console.log('startX: ', e.pageX);
	console.log('slider.offsetLeft: ', slider.offsetLeft);
	console.log('scrollLeft: ', slider.scrollLeft);
};
const mueve = (e) => {
    if(!clickPresionado){
        return;
    }
    const espaciado = e.pageX - slider.offsetLeft;
    const distanciaRecorrida = espaciado - coordenadaInicial;
    slider.scrollLeft = scrollLeft - distanciaRecorrida;
};
const suelta = (e) => {
    clickPresionado = false;
};

slider.addEventListener('mousedown', presiona);
slider.addEventListener('mousemove', mueve);
slider.addEventListener('mouseup', suelta);

const botonesEmail = document.querySelectorAll('[data-action="abrir-ventana-correo"]');
const botonesCerrar = document.querySelectorAll('[data-action="cerrar-ventana"]');
const ventanaCorreo = document.getElementById('ventana-correo');

botonesEmail.forEach((boton)=>{
    boton.addEventListener('click',(e)=>{
        e.preventDefault();
        ventanaCorreo.classList.add('ventana--active');
    });
});

botonesCerrar.forEach((boton)=>{
    boton.addEventListener('click',(e)=>{
        e.preventDefault();
        ventanaCorreo.classList.remove('ventana--active');
    });
});

window.addEventListener('load', async()=>{
    await animarTexto(document.querySelector('.hero__titulo--uno'));
    await animarTexto(document.querySelector('.hero__titulo--dos'));

    document.querySelectorAll('.hero__burbuja')[0].classList.add('hero__burbuja--active-1');
    document.querySelectorAll('.hero__burbuja')[1].classList.add('hero__burbuja--active-2');
});
//# sourceMappingURL=bundle.js.map
