const ticket = 'vip';
// let accessCode;

// if(ticket === 'vip'){
//     accessCode = 'VIP-123-456';
// } else {
//     accessCode = 'REGULAR-456-789';
// }

const accessCode = ticket === 'vip' ? 'VIP-123-456' : 'REGULAR-456-789';

ticket === 'vip' ? console.log('tu ticket es VIP') : console.log('tu ticket es REGULAR');

