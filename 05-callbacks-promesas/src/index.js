import './styles.css';
import { buscarHeroe } from './js/callbacks';

const heroeId = 'capi';

buscarHeroe( heroeId, (heroe) => {
    // console.log(`${heroe.nombre}`);
    console.log(heroe);
});





