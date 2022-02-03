import './styles.css';
import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas'

const heroeId1 = 'capi1';
const heroeId2 = 'spider';


//Callback hell
// buscarHeroe( heroeId1, (err, heroe1) => {
//     /* 
//     if(err) {
//         console.error(err);
//     }else {
//         console.log(heroe);
//     } 
//     */
//     if(err) {return console.error(err)};
//     buscarHeroe(heroeId2, (err, heroe2) => {
//         if(err) {return console.error(err)};
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
//     });
// });

//Promise hell
// buscarHeroe(heroeId1).then(heroe1 => {
//     buscarHeroe(heroeId2).then(heroe2 => {
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
//     });
// })

// Promise.all([true, 'hola', 123]).then(arr => {
//     console.log('promise.all', arr);
// });

Promise.all([ buscarHeroe(heroeId1), buscarHeroe(heroeId2) ])
    .then(([ heroe1, heroe2 ]) => {
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
}).catch( err => {
    alert(err)
}).finally(()=>{
    console.log('se terminó el promise.all');
});


console.log('fin del programa');