export class TodoList {
    constructor () {
        this.todos = [];
    }
    newTodo(tarea) {
        this.todos.push(tarea);
    }
    deleteTodo(id) {
        this.todos.pop(id)
    }
    getTodos() {
        return this.todos;
    }
    markTodo(id){
        //Función que marca o desmarca una tarea
        for( const todo of this.todos ){
            console.log(id, todo.id);
            if( todo.id == id){
                todo.completado = !todo.completado;
            }
        }
    }
    getStatus(id) { 
        this.todos(id).completado;
    }
    deleteCompleteTodos(){
        for(let element in this.todos){
            let i = this.todos.indexOf(element);
            if(element.completado === true && i !== -1){
                this.todos.slice(i, 1);
            }
        }
    }
}