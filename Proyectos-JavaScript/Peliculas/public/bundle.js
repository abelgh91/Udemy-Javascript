'use strict';

const cargarTitulos = (resultados) => {
    const contenedor = document.querySelector('#populares .main__grid');


    resultados.forEach((resultado) => {
        const plantilla = `
            <div class="main__media">
                <a href="#" class="main__media-thumb">
                    <img class="main__media-img" src="https://image.tmdb.org/t/p/w500/${resultado.poster_path}" alt="" />
                </a>
                <p class="main__media-titulo">${resultado.title}</p>
                <p class="main__media-fecha">2021</p>
            </div>`;

            contenedor.insertAdjacentHTML('beforeend', plantilla);
    });
};

const fetchPopulares = async() => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=6f8c5f09db78c868dada796915098008&language=es-ES&page=1`;
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        return datos.results;

    } catch (error) {
        console.log(error);
    }
    
};

const cargar = async() => {
    const resultados = await fetchPopulares();
    cargarTitulos(resultados);
};
cargar();
//# sourceMappingURL=bundle.js.map
