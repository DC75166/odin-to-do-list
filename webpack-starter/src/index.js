import "./style.css";
import { ProjectManager } from "./HomePage/ProjectManager.js";
import { addProject } from "./HomePage/ProjectActions.js";
import { DisplayProject } from "./HomePage/displayProject.js";
import { getFromStorage } from "./HomePage/storage.js";
import { DisplayTodo } from "./To-do/DisplayTodo.js";

document.addEventListener("DOMContentLoaded", () => {
  const manager = new ProjectManager();
  const displayer = new DisplayProject(".main", manager);
  getFromStorage(manager);
  displayer.render(manager.list());

  const currentProjectId = localStorage.getItem('currentProjectId');
  if(currentProjectId){
    const project = manager.list().find(p=> p.id == currentProjectId);
    if(project){
      const todoView = new DisplayTodo('.main', project, '.todoSidebar', manager);
      todoView.renderForm();
      todoView.display();
    }
}

  const form = document.querySelector(".newtodoForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.querySelector("#todoname").value.trim();
    const description = document
      .querySelector("#projectdescription")
      .value.trim();

    if (title === "" || description === "") return;

    addProject(manager, title, description);
    displayer.render(manager.list());

    form.reset();
  });
});
