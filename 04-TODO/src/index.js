import './styles.css';
import { Todo, TodoList } from './class'; //Cuando no se especifica que archivo exportar en la ruta, js toma el archivo index.js
import { crearTodoHTML } from './js/componentes';

// import { Todo } from './class/todo.class';
// import { TodoList } from './class/todo-list.class';

// import { saludar } from './js/componentes';
// const nombre = 'Fernando';
// saludar( nombre );

export const todoList = new TodoList();
const nuevaTarea = new Todo('Terminar curso de Fernando Herrera');
nuevaTarea.completado = false;

crearTodoHTML(nuevaTarea);

