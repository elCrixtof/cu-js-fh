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
            setTimeout(() => resolve(heroe), 1000);
        } else {
            reject(`No existe un héroe con el id ${id}`)
        }
    });
};

export const buscarHeroeAsync = async(id) => {
    const heroe = heroes[id];
    // const promesa = new Promise();
    // return promesa;
    if(heroe) {
        return heroe;
    } else {
        throw (`No existe un héroe con el id ${id}`)
    }
};

const promesaLenta = new Promise ((resolve, reject) => {
    setTimeout(() => resolve('Promesa Lenta'), 2000);
});
const promesaMedia = new Promise ((resolve, reject) => {
    setTimeout(() => resolve('Promesa Media'), 1500);
});
const promesaRapida = new Promise ((resolve, reject) => {
    setTimeout(() => resolve('Promesa Rápida'), 1000);
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}