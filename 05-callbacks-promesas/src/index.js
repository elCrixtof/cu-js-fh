import { obtenerHeroeAwait, obtenerHeroesArr } from "./js/await";
import { buscarHeroe } from "./js/promesas";

// const heroes = obtenerHeroesArr();
// console.log(heroes);


console.time('await');
// obtenerHeroesArr().then(heroes => {
//         console.table(heroes)
//         console.timeEnd('await');
// });

obtenerHeroeAwait('capi2').then(heroe => {
        console.log(heroe)
        console.timeEnd('await');
}).catch(console.warn);