import { postImagen } from "./imagenes-provider";

const body = document.body;
let inputFile, imgFoto;

const crearInputFileHtml = () => {
    const html = `
    <h1 class="mt-5">Subir archivos</h1>
    <hr>

    <label>Selecciona una fotografía: </label>
    <input type = "file" accept = "image/png, image/jpeg"/>

    <br>
    <img id="foto" class="img.thumbnail" src="">

    `;
    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div);

    inputFile = document.querySelector('input');
    imgFoto = document.querySelector('#foto');
}

//Eventos
const eventos = () => {
    inputFile.addEventListener('change', (event) => {
        const file = event.target.files[0]
        postImagen(file).then( url => imgFoto.src = url );
    })
}

export const init = () => {
    crearInputFileHtml();
    eventos();
}