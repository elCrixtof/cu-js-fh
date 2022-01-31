import './styles.css';
import { Todo, TodoList } from './class'; //Cuando no se especifica que archivo exportar en la ruta, js toma el archivo index.js
import { crearTodoHTML } from './js/componentes';

// import { Todo } from './class/todo.class';
// import { TodoList } from './class/todo-list.class';

// import { saludar } from './js/componentes';
// const nombre = 'Fernando';
// saludar( nombre );

const nuevoTexto = 'Terminar curso de Fernando Herrera';
const nuevaTarea = new Todo(nuevoTexto);
nuevaTarea.completado = false;

const listaTareas = new TodoList();
listaTareas.newTodo(nuevaTarea);
crearTodoHTML(nuevaTarea);

