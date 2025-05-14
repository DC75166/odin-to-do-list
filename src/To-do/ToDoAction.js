import { saveToStorage } from "../HomePage/storage";
import { Todo } from "./to-do";

export function addTodo(manager,project,title, description, priority, dueDate){
     const todo = new Todo(title, description, priority, dueDate);
     project.todos.push(todo);
     saveToStorage(manager.list());
}

export function DeleteToDo(manager,project,todoId){
    project.todos = project.todos.filter(t => t.id !== todoId);
    saveToStorage(manager.list());
}

export function ToggleToDo(manager,project,todoId){
    const todo = project.todos.find(t => t.id == todoId);
    if(todo){
        todo.completed = !todo.completed;
    }
    saveToStorage(manager.list());
}

export function EditTodo(manager, project, todoId, updatedData) {
    const todo = project.todos.find(t => t.id === todoId);

    if (todo) {
        // Update the todo with new data
        todo.title = updatedData.title;
        todo.description = updatedData.description;
        todo.priority = updatedData.priority;
        todo.dueDate = updatedData.dueDate;

        // Save to storage after editing
        saveToStorage(manager.list());
    }
}