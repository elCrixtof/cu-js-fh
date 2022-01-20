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

class Heroe extends Persona {
    clan = 'sin clan';
    constructor (nombre, codigo, frase) {
        super(nombre, codigo, frase);
        this.clan = 'Avengers';
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} de ${this.clan}`);
        super.quienSoy();
    }
};

const spiderman = new Heroe('Peter Parker', 'Spiderman', 'NENE MALO');
console.log(spiderman);
spiderman.quienSoy();
// spiderman.quienSoy();
