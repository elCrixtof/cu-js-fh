import { Todo, TodoList } from "../class";
import { todoList } from "..";

//Referencias en el HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnDeleteCompleted = document.querySelector('.clear-completed');
const uLFilters = document.querySelector('.filters')
const anchorFilters = document.querySelectorAll('.filtro')

export const cargarTodos = () => {
    const todos = todoList.getTodos();
    // console.log(todos);
    divTodoList.innerHTML = ''
    // todos.forEach(element => {
    //     crearTodoHTML(element);
    // });
    todos.forEach( crearTodoHTML );
};

export const crearTodoHTML = (todo) => {
    const htmlTodo = 
    `
    <li class="${(todo.completado)?'completed': ''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado)? 'checked': ''}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
    `
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    divTodoList.append(div.firstElementChild);
    return div.firstElementChild;

}

//Eventos
txtInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13 && txtInput.value.length > 0) {
        // console.log(txtInput.value);
        const nuevoTodo = new Todo(txtInput.value);
        todoList.newTodo(nuevoTodo);
        // console.log(todoList);
        crearTodoHTML(nuevoTodo);
        txtInput.value = '';
    }
});

divTodoList.addEventListener('click', (event) => {
    const nombreElemento = event.target.localName; // input, label, button
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');
    // console.log(todoElemento);
    // console.log(nombreElemento);

    // Marca como completada una tarea
    if(nombreElemento.includes('input')){  //Click en el check
        todoList.markTodo(todoId);
        todoElemento.classList.toggle('completed');
        // console.log(todoList.getTodos());
    }

    // Elimina tarea 
    if(nombreElemento.includes('button')) {
        todoList.deleteTodo(todoId);
        divTodoList.removeChild(todoElemento);
        // console.log(todoList.getTodos());
    }

});

btnDeleteCompleted.addEventListener('click', () => {
    todoList.deleteCompleteTodos();
    // console.log(todoList.getTodos());
    // const todosUncompleted = todoList.getTodos();
    // divTodoList.innerHTML = ''
    // todosUncompleted.forEach(element => {
    //     crearTodoHTML(element);
    // });
    for( let i = divTodoList.children.length-1; i >= 0; i-- ) {
        const elemento = divTodoList.children[i];
        if( elemento.classList.contains('completed') ){
            divTodoList.removeChild(elemento);
        }
    }
});

uLFilters.addEventListener('click', (event) => {
    console.log(event.target.text);
    const filtro = event.target.text;
    if(!filtro) { return; }

    anchorFilters.forEach(elemento => elemento.classList.remove('selected'));
    event.target.classList.add('selected');
    console.log(event.target);

    for(const elemento of divTodoList.children) {
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');
        switch(filtro) {
            case 'Pendientes': 
                if(completado) {
                    elemento.classList.add('hidden');
                }
            break;

            case 'Completados': 
                if(!completado) {
                    elemento.classList.add('hidden');
                }
            break;
        }
    }
});