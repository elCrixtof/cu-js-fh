function saludar() {
    console.log('quiubo?');
}

const saludar2 = function() {
    console.log('quiubo?');
}

function saludar3 (nombre) {
    console.log('hola ' + nombre);
}

const saludar4 = function (nombre) {
    console.log('hola ' + nombre);
}

function saludar5(nombre) {
    console.log('quiubo ' + nombre + '?');
    console.log(arguments);
    return 1;
}

const saludarFlecha = () => {
    console.log('hola arrow');
}

const saludarFlecha2 = (nombre) => {
    console.log('hola ' + nombre);
}


// saludar();
// saludar2();
// saludar3('pepa');
// saludar4('pepa');
// const retornoSaludar = saludar5('pepa', 20, true, 'new york'); // Retorno de saludar5 es 1
// console.log(retornoSaludar);
// saludarFlecha();
// saludarFlecha2('pepa');

function sumar (a, b) {
    return a + b;
};

const sumar2 = (a,b) => {
    return a + b;
};

const sumar3 = (a,b) => a + b;

console.log(sumar(1,2));
console.log(sumar2(1,2));
console.log(sumar3(1,2));

function getAleatorio() {
    return Math.random();
}
console.log(getAleatorio());

const getAleatorio2 = () => Math.random();
console.log(getAleatorio2());