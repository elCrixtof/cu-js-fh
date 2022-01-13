const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima pelicula': 'Infinity War'
};

console.log(personaje);
console.log('Nombre:', personaje.nombre);
console.log('Nombre:', personaje['nombre']);
console.log('Edad:', personaje.edad);
console.log('Coords:', personaje.coords);
console.log('Lat:', personaje.coords.lat);
console.log('No. de trajes:', personaje.trajes.length);
console.log('Último traje:', personaje.trajes[personaje.trajes.length-1]);

const x = 'vivo';
console.log('Vive?:', personaje[x]);
console.log('Última pelicula:', personaje['ultima pelicula']);

//Más detalles
delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriePares = Object.entries(personaje);
console.log(entriePares);

Object.freeze(personaje);
personaje.dinero = 1000000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica'
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({propiedades, valores});