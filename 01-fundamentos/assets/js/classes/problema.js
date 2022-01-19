console.log('ready');
const fher = {
    nombre: 'fernando',
    edad: 30,
    imprimir () {
        console.log(`Nombre: ${this.nombre}`);
    }
}

const pedro = {
    nombre: 'pedro',
    edad: 15
};

function Persona(nombre, edad) {
    this.nombre = nombre,
    this.edad = edad,
    this.imprimir = function () {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    },
    console.log('se ejecuto esta linea');
}

const maria = new Persona ('Maria', 18);
const melissa = new Persona ('Melissa', 20);
console.log(maria);
maria.imprimir();
melissa.imprimir();