const boton = document.getElementById('toggle-form-gasto');
const formularioGasto = document.getElementById('formulario-gasto');

const abrirFormularioGasto = (modo = 'agregarGasto') => {
    boton.classList.add('agregar-gasto__btn--active');
    formularioGasto.classList.add('formulario-gasto--active');
    

    if(modo === 'editarGasto'){
        document.querySelector('.formulario-gasto__titulo').innerText = 'Editar gasto';
        document.querySelector('.formulario-gasto__btn').innerText = 'Editar gasto';
        document.getElementById('formulario-gasto').dataset.modo = 'editarGasto';
    }else{
        document.getElementById('descripcion').value = '';
        document.getElementById('precio').value = '';
        document.querySelector('.formulario-gasto__titulo').innerText = 'Agregar gasto';
        document.querySelector('.formulario-gasto__btn').innerText = 'Agregar gasto';
        document.getElementById('formulario-gasto').dataset.modo = 'agregarGasto';
    }
};

const cerrarFormularioGasto = () => {
    boton.classList.remove('agregar-gasto__btn--active');
    formularioGasto.classList.remove('formulario-gasto--active')
};

boton.addEventListener('click', (e)=>{
    if([...formularioGasto.classList].includes('formulario-gasto--active')){
        cerrarFormularioGasto();
    }else{
        abrirFormularioGasto();
    } 
});

export {cerrarFormularioGasto, abrirFormularioGasto}