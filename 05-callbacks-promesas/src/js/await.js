import { buscarHeroe, buscarHeroeAsync } from "./promesas";

const heroesIds = ['capi', 'spider', 'iron'];

// export const obtenerHeroesArr = async() => {
//     const heoresArr = [];

//     // heroesIds.forEach( async(element) => {
//     //     heoresArr.push(await buscarHeroeAsync(element))
//     //     // buscarHeroeAsync(element).then(heroe => heoresArr.push(heroe));
//     // });


//     // Lo correcto es no resolver las promesas una por una dentro de un ciclo 
//     // sino resolverlas todas a la vez
//     // for(const id of heroesIds) {
//     //     const heroe = await buscarHeroe(id);
//     //     heoresArr.push(heroe);
//     // }
    
//     // return heoresArr;

//     //Obtenemos un arreglo de promesas
//     for(const id of heroesIds) {
//         heoresArr.push(buscarHeroe(id));
//     }
    
//     return await Promise.all(heoresArr);
// };

// export const obtenerHeroesArr = async() => {
//     return await Promise.all(heroesIds.map(buscarHeroe));
// };

export const obtenerHeroesArr = async() => await Promise.all(heroesIds.map(buscarHeroe));

export const obtenerHeroeAwait = async(id) => {
    try {
        const heroe = await buscarHeroeAsync(id);
        return heroe;
    } catch (error) {
        console.log('CATCH!!!');
        // throw error;
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        }
    }
};