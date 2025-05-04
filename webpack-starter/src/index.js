import './style.css';
import { ProjectManager } from './HomePage/ProjectManager.js';
import { addProject } from './HomePage/addProject.js';
import { displayProject } from './HomePage/displayProject.js';


const manager = new ProjectManager();
const displayer = new displayProject('.main',manager);

const form = document.querySelector('.newtodoForm');  

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#todoname').value.trim();
  const description = document.querySelector('#projectdescription').value.trim();

  if (title === '' || description === '') return; 

  addProject(manager, title, description); 
  displayer.render(manager.list()); 

  form.reset(); 
});
