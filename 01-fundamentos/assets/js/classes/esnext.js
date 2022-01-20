class Rectangulo {

    #area = 0;

    constructor (base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    #areaPorDos () {
        console.log(this.#area * 2);
    }
}

const rectangulo1 = new Rectangulo(10, 15);

rectangulo1.areaPorDos = function() {
    console.log('hola');
}

console.log(rectangulo1);
rectangulo1.areaPorDos();
// rectangulo1.#areaPorDos(); //no deja acceder porque es privada

