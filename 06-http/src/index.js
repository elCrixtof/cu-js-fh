import { init } from "./js/chistes-page";
import { obtenerUsuarios } from "./js/http-provider";

init();

obtenerUsuarios().then(console.log);