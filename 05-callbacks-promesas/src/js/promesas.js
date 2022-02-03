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

export const buscarHeroe = (id) => {
    const heroe = heroes[id];
    // const promesa = new Promise();
    // return promesa;
    return new Promise( ( resolve, reject ) => {
        if(heroe) {
            resolve(heroe);
        } else {
            reject(`No existe un héroe con el id ${id}`)
        }
    });
};