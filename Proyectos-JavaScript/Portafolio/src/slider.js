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