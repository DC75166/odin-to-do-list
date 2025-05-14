import { Project } from "./ProjectManager";
import { Todo } from "../To-do/to-do.js";

const STORAGE_KEY = 'project';

export function saveToStorage(projectList){
    console.log("Saving to localStorage:", projectList);
    localStorage.setItem(STORAGE_KEY,JSON.stringify(projectList));
}

export function getFromStorage(manager) {
    const savedProject = JSON.parse(localStorage.getItem(STORAGE_KEY));
     console.log("Loaded projects from storage:", savedProject);

    // Handle if it's an object instead of an array
    if (savedProject && Array.isArray(savedProject)) {
        savedProject.forEach(projectData => {
            const project = new Project(projectData.title, projectData.description, projectData.id);
            project.todos = (projectData.todos || []).map(todoData => {
                const todo = new Todo(todoData.title, todoData.description, todoData.priority, todoData.dueDate);
                todo.completed = todoData.completed;
                return todo;
            });
            manager.add(project);
        });
    } else if (savedProject && typeof savedProject === 'object') {
        // If it's an object, wrap it in an array
        const projectArray = Object.values(savedProject);
        projectArray.forEach(projectData => {
            const project = new Project(projectData.title, projectData.description, projectData.id);
            project.todos = (projectData.todos || []).map(todoData => {
                const todo = new Todo(todoData.title, todoData.description, todoData.priority, todoData.dueDate);
                todo.completed = todoData.completed;
                return todo;
            });
            manager.add(project);
        });
    } else {
        console.log("No valid projects found in storage.");
    }
}

