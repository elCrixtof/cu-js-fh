const crudURL = 'https://reqres.in/api/users'

const getUsuario = async(id) => {
    try {
        const resp = await fetch(`${crudURL}/${id}`);
        if(!resp.ok) throw 'No se pudo hacer la petición';
        // return (await resp).json()
        const {data:usuario} = await resp.json();
        return usuario;
        
    } catch (error) {
        throw error;
    }
};

export {
    getUsuario
}