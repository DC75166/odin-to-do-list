import { Todo } from "./to-do";

export function addTodo(project,title, description, priority, dueDate){
     const todo = new Todo(title, description, priority, dueDate);
     project.todos.push(todo);
}

export function DeleteToDo(project,todoId){
    const todo = project.todos.filter(t => t.id !== todoId);
}

export function ToggleToDo(project,todoId){
    const todo = project.todos.find(t => t.id == todoId);
}