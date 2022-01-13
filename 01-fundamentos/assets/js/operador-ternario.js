/*
Dias de semana abrimos a las 11,
pero los fines de semana abrimos a las 9
*/

// Entra a un sitio web, para consultar si está abierto hoy...
const dia = 1; // 0: domingo...6: sabado
const horaActual = 8;

let horaApertura;
let mensaje; //Está abierto, está cerrado, hoy abrimos a las XX

// if (dia === 0 || dia === 6) {
//     console.log('fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('entre semana');
//     horaApertura = 11;
// }

// if( [0,6].includes(dia) ) {
//     console.log('fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('entre semana');
//     horaApertura = 11;
// }

horaApertura = ( [0,6].includes(dia) ) ? 9 : 11;

// if ( horaActual >= horaApertura) {
//     mensaje='abierto';
// }else {
//     mensaje=`cerrado, hoy se abre a las ${horaApertura}`;
// }

mensaje = (horaActual >= horaApertura) ? 'abierto' : `cerrado, hoy se abre a las ${horaApertura}`;

console.log( horaApertura );
console.log(mensaje);

