// function crearPersona(nombre, apellido) {
//     return {
//         nombre,
//         apellido
//     }
// };


const crearPersona = (nombre, apellido) => ({nombre, apellido});
const persona = crearPersona('Chris', 'Acosta');
console.log(persona);


function imprimeArgumentos(){
    console.log(arguments);
}
imprimeArgumentos(10, true, false, 'Hellooo', 'Pepa');


const imprimeArgumentos2 = ( edad, ...args ) => {
    // console.log({edad, args});
    return args;
}
const argumentos = imprimeArgumentos2(10, true, false, 'Hellooo', 'Pepa');

const [ vivo, casado, saludo, nombre ] = argumentos;
console.log({vivo, casado, saludo, nombre});

const { apellido } = crearPersona('Chris', 'Acosta');
console.log({apellido});

const { apellido: nuevoApellido } = crearPersona('Chris', 'Acosta');
console.log({nuevoApellido});

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster']
};

// const imprimePropiedades = ( personaje ) => {
//     console.log(`nombre:`, personaje.nombre);
//     console.log(`codeName:`, personaje.codeName);
//     console.log(`vivo:`, personaje.vivo);
//     console.log(`edad:`, personaje.edad);
//     console.log(`trajes:`, personaje.trajes);
// }

const imprimePropiedades = ( {nombre, codeName, vivo, edad=0, trajes} ) => {
    // edad = edad || 0; //se hace una validación donde si la edad existe vale lo que debe de ser, de lo contrario vale 0
    console.log(nombre);
    console.log(codeName);
    console.log(vivo);
    console.log(edad);
    console.log(trajes);
}

imprimePropiedades(tony);