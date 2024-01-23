import cargarGeneros from "./cargarGeneros";
import cargarTitulos from "./cargarTitulos";
import fetchPopulares from "./fetchPopulares";

const filtroPeliculas = document.getElementById('movie');
const filtroShow = document.getElementById('tv');

filtroPeliculas.addEventListener('click', async (e)=>{
    e.preventDefault();
    cargarGeneros('movie');
    const resultados = await fetchPopulares('movie');
    cargarTitulos(resultados);
    filtroShow.classList.remove('btn--active');
    filtroPeliculas.classList.add('btn--active');
    document.querySelector('#populares .main__titulo').innerText = 'Películas populares';
});

filtroShow.addEventListener('click', async (e)=>{
    e.preventDefault();
    cargarGeneros('tv');
    const resultados = await fetchPopulares('tv');
    cargarTitulos(resultados);
    filtroPeliculas.classList.remove('btn--active');
    filtroShow.classList.add('btn--active');
    document.querySelector('#populares .main__titulo').innerText = 'Series populares';
})