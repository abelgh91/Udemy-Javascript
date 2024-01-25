//Crear un set
const colores = new Set(['rojo', 'verde', 'azul']);
console.log(colores);

//Agregar valores al set
colores.add('amarillo');
console.log(colores)

colores.forEach((color)=>{
    console.log(color);
});

const numeros = new Set([1,2,3,4]);
console.log(numeros)