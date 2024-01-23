const fetchPopulares = async() => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=6f8c5f09db78c868dada796915098008&language=es-ES&page=1`
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        return datos.results;

    } catch (error) {
        console.log(error)
    }
    
};

export default fetchPopulares