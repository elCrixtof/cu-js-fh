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

const postUsuario = async(usuario) => {
    try {
        const resp = await fetch(crudURL, {
            method: 'POST',
            body: JSON.stringify(usuario),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(!resp.ok) throw 'No se pudo realizar la petición'
        return await resp.json();
    } catch (error) {
        throw error;
    }
}

const updateUsuario = async(usuario, id) => {
    try {
        const resp = await fetch(`${crudURL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(usuario),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(!resp.ok) throw 'No se pudo realizar la petición'
        return await resp.json();
    } catch (error) {
        throw error;
    }
};

const deleteUsuario = async(id) => {
    const resp = await fetch(`${crudURL}/${id}`, {
        method: 'DELETE'
    })
    return (resp.ok) ? 'Borrado' : 'No se pudo eliminar'
}

export {
    getUsuario,
    postUsuario,
    updateUsuario,
    deleteUsuario
}