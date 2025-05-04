import Project from './Project.js';

export function addProject(manager,title,description){
    const newProject = new Project(title,description);
    manager.add(newProject);
}