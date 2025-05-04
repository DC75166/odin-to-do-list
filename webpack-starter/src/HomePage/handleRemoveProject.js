import { removeProject } from './removeProject.js';

export function handleRemoveProject(projectID,manager,displayer){
    removeProject(manager,projectID);
    displayer.render(manager.list());
}