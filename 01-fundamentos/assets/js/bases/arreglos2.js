let juegos = ['zelda', 'mario', 'metroid', 'chrono'];
console.log('Largo:', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length-1]
console.log({primero, ultimo});

juegos.forEach( (elemento, indice, arr) => {
    console.log(elemento, indice, arr);
});

let nuevaLongitud = juegos.push( 'F-zero' );
console.log({nuevaLongitud, juegos});

nuevaLongitud = juegos.unshift('Dk. Kong');
console.log({nuevaLongitud, juegos});

juegoBorrado = juegos.pop()
console.log({juegoBorrado, juegos});

console.log(juegos);
let pos = 1;
let juegosBorrados = juegos.splice(pos, 2);
console.log(juegosBorrados);

let metroidIndex = juegos.indexOf('metroid');
console.log({metroidIndex});