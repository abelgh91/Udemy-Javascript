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

        ventanaTrabajos.classList.add('ventana--active')
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