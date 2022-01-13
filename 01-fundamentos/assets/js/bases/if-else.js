let a = 11;

if ( a > 10 ) { //Undefined, null, una asignación
console.log('a es mayor que 10');
} else {
    console.log('a es menor que 10');
}

console.log('fin del programa');

const hoy = new Date();
let dia = hoy.getDay(); //0: Domingo, //1: Lunes, 2: Martes ... 
console.log({dia});

// if (dia === 0) {
//     console.log('hoy es domingo');
// } else {
//     if (dia === 1) {
//         console.log('es lunes');
//     }else {
//         console.log('no es lunes ni domingo');
//     }
// }

if (dia === 0) {
    console.log('hoy es domingo');
} else if(dia === 1){
    console.log('Lunes');
}else if (dia === 2){
    console.log('Martes');
}else if(dia === 3){
    console.log('Miercoles');
}

const semana = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
    'domingo'
];

console.log(semana[dia-1]);

const diaSemana = {
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado',
    0: 'domingo'
};

console.log(diaSemana[dia] || 'día no valido');


//