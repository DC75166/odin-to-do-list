import { Project } from './ProjectManager.js';
import { saveToStorage } from './storage.js';

export function addProject(manager,title,description){
    const newProject = new Project(title,description);
    manager.add(newProject);
    saveToStorage(manager.list());
}

export function removeProject(projectId, manager, displayer) {
    manager.remove(projectId);
    saveToStorage(manager.list());
    displayer.render(manager.list());
  }