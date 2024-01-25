const galeria = document.getElementById('trabajos');

const observer = new IntersectionObserver((entries)=>{
    if(entries[0].isIntersecting){
        const trabajos = galeria.querySelectorAll('.trabajos__imagenes a');
        trabajos.forEach((trabajo, index)=>{
            setTimeout(() => {
                trabajo.classList.add('trabajos__trabajo--visible')
            }, 300 * index);
            
        })
    }
}, {
    rootMargin: '0px',
    threshold: 0.4,
});

observer.observe(galeria);