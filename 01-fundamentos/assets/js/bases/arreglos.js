// const arr = new Array(10);
// const arr = [];
// console.log(arr);

let videoJuegos = ['Mario 3', 'Zelda', 'Halo'];
console.log({videoJuegos});
console.log(videoJuegos[1]); // Zelda
let arregloCosas = [
    true,
    123,
    'Christian',
    1 * 2,
    function(){},
    () => {},
    {a: 1},
    [
        'Ganondolf', 'Link', 'Epona', 
        [
            'Templo del Agua', 
            'Templo de la oscuridad'
        ]
    ]
];
console.log(arregloCosas);
console.log(arregloCosas[0]);
console.log(arregloCosas[7][2]);
console.log(arregloCosas[7][3]);
console.log(arregloCosas[7][3][1]);