import fetchGeneros from "./fetchGeneros";
import obtenerGenero from "./obtenerGenero";

const fetchPopulares = async(filtro = 'movie') => {
    const tipo = filtro === 'movie' ? 'movie' : 'tv';
    const url = `https://api.themoviedb.org/3/${tipo}/popular?api_key=6f8c5f09db78c868dada796915098008&language=es-ES&page=1/&region=ES`
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

export default fetchPopulares