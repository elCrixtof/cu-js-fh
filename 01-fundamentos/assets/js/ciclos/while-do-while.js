const carros = ['ford', 'mazda', 'honda', 'toyota'];

console.warn('while')
let i = 0;
while ( i < carros.length ) {
    console.log(carros[i]);
    i ++;
}

console.warn('do while')
let j = 0;
do {
    console.log(carros[j]);
    j++;
} while (j < carros.length);