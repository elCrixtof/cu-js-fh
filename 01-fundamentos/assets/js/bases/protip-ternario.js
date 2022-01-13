// const elMayor = (a,b) => {
//     return (a>b) ? a : b;
// }
const elMayor = (a,b) => (a>b) ? a : b
console.log(elMayor(15,2));

const tieneMembresia = (miembro) => (miembro) ? '2 dolares' : '10 dolares';
const amigo = true;
console.log(tieneMembresia(amigo));

const amigosArr = [
    'peter',
    'tony',
    'dr. strage',
    amigo ? 'thor' : 'loky',
    (() => 'Nick Fury')()
];

console.log(amigosArr);

const nota = 82.5; // A+ A B+ B
const grado = nota >= 95 ? 'A+':
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+':
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C' : 'F';

console.log(grado);