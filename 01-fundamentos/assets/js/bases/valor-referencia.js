let a = 10;
let b = a;
a = 30;
console.log({a, b});

let juan = { nombre: 'juan' };
let ana  = { ...juan };
ana.nombre = 'ana';
console.log({juan, ana});

const cambiaNombre = ({...persona}) => {
    persona.nombre = 'tony';
    return persona;
}

let peter = { nombre: 'peter' };
let stark = cambiaNombre(peter);
console.log({peter, stark});


//Arreglos
const frutas = ['manzana', 'piña', 'pera'];

console.time('slice');
const otrasFrutas = frutas.slice(); //Rompe referencia
console.timeEnd('slice');

console.time('spreed');
const otrasFrutas2 = [...frutas]; //Rompe referencia
console.timeEnd('spreed');

otrasFrutas.push('mango');
console.log(frutas);
console.log(otrasFrutas);
