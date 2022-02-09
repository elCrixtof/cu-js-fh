const cloudURL = 'https://api.cloudinary.com/v1_1/universidad-de-guanajuato';
const cloudPreset = 'kvejpryu';

const postImagen = async(imagen) => {
    const formdata = new FormData();
    formdata.append("upload_preset", cloudPreset);
    formdata.append("file", imagen, imagen.name);
    try {
        const resp = await fetch(`${cloudURL}/upload`,{
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        });
        if (resp.ok) {
            const cloudResp = await resp.json();
            console.log(cloudResp);
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }
        // if(!resp.ok) throw 'No se ha podido realizar la petición'
        // return await resp.json();
    } catch (error) {
        throw error;
    }
};

export {
    postImagen
}

