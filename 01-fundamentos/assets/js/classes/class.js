class Persona {
    nombre = '';
    codigo = '';
    frase = '';

    constructor (nombre, codigo, frase) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        
    }

}

const spiderman = new Persona();
console.log(spiderman);