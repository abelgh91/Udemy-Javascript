import cargarTitulos from "./cargarTitulos";
import fetchPopulares from "./fetchPopulares";

const cargar = async() => {
    const resultados = await fetchPopulares();
    cargarTitulos(resultados);
};
cargar();