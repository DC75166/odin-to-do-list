import { Project } from "./ProjectManager";
import { Todo } from "../To-do/to-do.js";

const STORAGE_KEY = 'project';

export function saveToStorage(projectList){
    localStorage.setItem(STORAGE_KEY,JSON.stringify(projectList));
}

export function getFromStorage(manager){
    const savedProject = JSON.parse(localStorage.getItem(STORAGE_KEY))||[];
    savedProject.forEach(projectData=>{
        const project = new Project(projectData.title,projectData.description,projectData.id);
        project.todos = (projectData.todos || []).map(todoData => {
            const todo = new Todo(todoData.title, todoData.description, todoData.priority, todoData.dueDate);
            todo.completed = todoData.completed;
            return todo;
        });
        manager.add(project);
    })
}