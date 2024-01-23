const fetchGeneros = async(filtro = 'movie') =>{
    const tipo = filtro === 'movie' ? 'movie' : 'tv';

    const url = `https://api.themoviedb.org/3/genre/${tipo}/list?api_key=6f8c5f09db78c868dada796915098008&language=es-ES`
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        return datos.genres;

    } catch (error) {
        console.log(error)
    }
};

export default fetchGeneros;