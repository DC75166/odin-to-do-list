import { Project } from './ProjectManager.js';

export function addProject(manager,title,description){
    const newProject = new Project(title,description);
    manager.add(newProject);
}

export function removeProject(manager,projectId){
    manager.remove(projectId);
}

 export function handleRemoveProject(projectID,manager,displayer){
    removeProject(manager,projectID);
    displayer.render(manager.list());
}