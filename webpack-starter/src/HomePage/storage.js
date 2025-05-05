import { Project } from "./ProjectManager";

const STORAGE_KEY = 'project';

export function saveToStorage(projectList){
    localStorage.setItem(STORAGE_KEY,JSON.stringify(projectList));
}

export function getFromStorage(manager){
    const savedProject = JSON.parse(localStorage.getItem(STORAGE_KEY))||[];
    savedProject.forEach(projectData=>{
        const project = new Project(projectData.title,projectData.description,projectData.id);
        manager.add(project);
    })
}