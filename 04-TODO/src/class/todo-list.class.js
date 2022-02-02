import { Todo } from ".";

export class TodoList {
    constructor () {
        this.loadLocalStorage();
    }
    newTodo(tarea) {
        this.todos.push(tarea);
        this.saveLocalStorage();
    }
    deleteTodo(id) {
        // for (const todo of this.todos) {
        //     let i = this.todos.indexOf(todo);
        //     if (todo.id == id && i !== -1) {
        //         this.todos.splice(i, 1);
        //     }

        // }
        this.todos = this.todos.filter(todo => todo.id != id);
        this.saveLocalStorage();
    }
    getTodos() {
        return this.todos;
    }
    markTodo(id){
        //Función que marca o desmarca una tarea
        for( const todo of this.todos ){
            // console.log(id, todo.id);
            if( todo.id == id){
                todo.completado = !todo.completado;
            }
        }
        this.saveLocalStorage();
    }
    getStatus(id) { 
        this.todos(id).completado;
    }
    deleteCompleteTodos(){
        // for(let element of this.todos){
        //     console.log(element.completado);
        //     let i = this.todos.indexOf(element);
        //     if(element.completado === true && i !== -1){
        //         this.todos.splice(i, 1);
        //     }
        // }

        this.todos = this.todos.filter(todo=>!todo.completado);
        this.saveLocalStorage();
    }
    saveLocalStorage(){
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
    loadLocalStorage(){
        // if(localStorage.getItem('todos')){
        //     this.todos = JSON.parse(localStorage.getItem('todos'));
        // } else {
        //     this.todos = [];
        // }
        this.todos = localStorage.getItem('todos') 
                     ? JSON.parse(localStorage.getItem('todos')) 
                     : this.todos = [] ;
        // console.log(this.todos);
        // this.todos = this.todos.map(obj => Todo.fromJson(obj));
        this.todos = this.todos.map(Todo.fromJson);
        // console.log(this.todos);
    }
}