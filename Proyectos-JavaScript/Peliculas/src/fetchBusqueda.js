import fetchGeneros from "./fetchGeneros";
import obtenerGenero from "./obtenerGenero";

const fetchBusqueda = async(pagina = 1) => {
    const tipo = document.querySelector('.main__filtros .btn--active')?.id;
    const idGenero = document.querySelector('#filtro-generos .btn--active')?.dataset.id;
    const añoInicial = document.getElementById('años-min').value || 1950;
    const añoFinal = document.getElementById('años-max').value || 2024;
    let url;
    if(tipo === 'movie'){
        url = `https://api.themoviedb.org/3/discover/movie?api_key=6f8c5f09db78c868dada796915098008&language=es-ES&sort_by=popularity.desc&include_adult=false&page=1&with_genres=${idGenero}&primary_release_date.gte=${añoInicial}-01-01&primary_release_date.lte=${añoFinal}-12-31&region=US&page=${pagina}`
    }else if(tipo === 'tv'){
        url = `https://api.themoviedb.org/3/discover/tv?api_key=6f8c5f09db78c868dada796915098008&language=es-ES&sort_by=popularity.desc&include_adult=false&page=1&with_genres=${idGenero}&first_air_date.gte=${añoInicial}-01-01&first_air_date.lte=${añoFinal}-12-31&region=US&page=${pagina}`
    }
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        const resultados = datos.results;
        const generos = await fetchGeneros();
        resultados.forEach((resultado)=>{
            resultado.genero = obtenerGenero(resultado.genre_ids[0], generos)
        })
        return resultados;
    } catch (error) {
        console.log(error)
    }
};

export default fetchBusqueda;