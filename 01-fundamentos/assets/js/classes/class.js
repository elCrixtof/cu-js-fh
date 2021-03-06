class Persona {
    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log(this.nombre);
        console.log('Hola a todos, soy un método estático');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor (nombre, codigo, frase) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.miFrase}`);
    }

    set setComidaFavorita (comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita () {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }
};

const spiderman = new Persona('Peter Parker', 'Spiderman', 'NENE MALO');
const ironman = new Persona('Tony Stark', 'Iron Man', 'yo soy thanos');

// console.log(ironman);
// spiderman.quienSoy();
// ironman.quienSoy();

spiderman.setComidaFavorita = 'El pie de cereza de la tía May';
let comidaSpiderman = spiderman.getComidaFavorita;
// console.log(comidaSpiderman);
// console.log(spiderman);


// Propiedades, gets y metodos estáticos
// Persona._conteo = 2;
console.log('Conteo estático', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'hola mundo';
console.log(Persona.propiedadExterna);
console.log(Persona);