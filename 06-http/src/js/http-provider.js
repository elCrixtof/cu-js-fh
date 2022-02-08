const jokeURL = 'https://api.chucknorris.io/jokes/random';
const usuariosURL = 'https://reqres.in/api/users?page=2'

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

const obtenerUsuarios = async() => {
    const resp = await fetch(usuariosURL);
    if(!resp.ok) throw ('No se pudo realizar la petición');
    try {
        const {data:usuarios} = await resp.json();
        return usuarios;
    } catch (error) {
        throw error;
    }
};

export {
    obtenerChiste,
    obtenerUsuarios
}