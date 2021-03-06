const heroes = {
    capi: {
        nombre: 'capitán américa',
        poder: 'aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'ironman',
        poder: 'absurda cantidad de dinero'
    },
    spider: {
        nombre: 'spiderman',
        poder: 'la mejor reacción alergica a a las picaduras de araña'
    }
};

export const buscarHeroe = (id, callback) => {
    const heroe = heroes[id];
    if(heroe){
        callback( null, heroe );
    } else {
        //Hubo un error
        callback( `No existe un héroe con el id ${id}`, heroe );
    }
    // callback(heroe);
};