const array = ['Texto', 456.1, false, { propiedad: 'valor' }, [1, 2, 3]];
console.log(array);

const friends = ['Alejandro', 'Manuel', 'Cesar'];
console.log(friends[0]);

const colors = [];
colors[0] = 'rojo';
colors[1] = 'verde';
colors[3] = 'blanco';
colors[3] = 'amarillo';

console.log('El array colors tiene ' + colors.length + ' colores');

colors.push('azul');
console.log(colors)