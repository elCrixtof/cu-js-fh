const jokeURL = 'https://api.chucknorris.io/jokes/random';

const obtenerChiste = async() => {
    try {
        const resp = await fetch(jokeURL);
        if(!resp.ok) throw ('No se pudo realizar la petición');
        const {icon_url, id, value} =  await resp.json();
        return { icon_url, id, value }
    } catch (err) {
        throw err;
    }
}

export {
    obtenerChiste
}