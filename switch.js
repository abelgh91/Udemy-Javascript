const user = {
    name: 'Abel',
    country: 'España',
};

if (user.country === 'Mexico' && usuario.edad > 18) {
	console.log('El usuario es mexicano');
} else if (user.country === 'España') {
	console.log('El usuario es español');
} else if (user.country === 'Argentina') {
	console.log('El usuario es argentino');
} else {
	console.log('El usuario es de otro pais');
}

switch (user.country) {
    case 'Mexico':
        console.log('El usuario es mexicano');
        break;
    case 'España':
        console.log('El usuario es español');
        break;
    case 'Argentina':
        console.log('El usuario es argentino');
        break;
    default:
        console.log('El usuario es de otro pais');
}