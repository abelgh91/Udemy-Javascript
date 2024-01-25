const persona = {
    name: 'Abel'
};

const mapa = new Map([
    ['name', 'Abel'],
    [true, 'verdadero'],
    [persona, {password: '123'}]
]);
console.log(mapa.get(persona))

mapa.forEach((valor, propiedad)=>{
    console.log(valor, propiedad)
})