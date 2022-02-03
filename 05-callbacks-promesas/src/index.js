import './styles.css';
import { buscarHeroe } from './js/callbacks';

const heroeId = 'capi2';

buscarHeroe( heroeId, (err) => {
    if(err) {
        console.err(err);
    }else {
        console.error('Algo salió mal');
    }
});





