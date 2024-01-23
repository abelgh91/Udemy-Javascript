const fetchItem = async(id) =>{
    const tipo = document.querySelector('.main__filtros .btn--active').id;
    try {
        const url = `https://api.themoviedb.org/3/${tipo}/${id}?api_key=6f8c5f09db78c868dada796915098008&language=es-ES`;
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.log(error)
    }
}

export default fetchItem;