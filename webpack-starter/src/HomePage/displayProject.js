import { removeProject } from './ProjectActions.js';
import '../style.css';
import { DisplayTodo } from '../To-do/DisplayTodo.js';

export class DisplayProject{
    constructor(containerSelector,manager){
       this.container = document.querySelector(containerSelector);
       this.manager = manager;
    }

    clear(){
        this.container.innerHTML = '';
    }

    render(projects){
        this.clear();

        projects.forEach(project => {
            const card = document.createElement('div');
            card.classList.add('project-card');
            card.setAttribute('data-id',project.id);

            const title = document.createElement('h3');
            title.textContent = project.title;

            const description = document.createElement('p');
            description.textContent = project.description;

            const openButton = document.createElement('button');
            openButton.classList.add('open-button');
            openButton.textContent = 'Open project';

            openButton.addEventListener('click', (e) => {
                const projectId = e.target.closest('.project-card').dataset.id;
                const project = this.manager.list().find(p => p.id == projectId);
                const todoView = new DisplayTodo('.main', project , '.todoSidebar',this.manager);
                todoView.renderForm();
                todoView.display();
              });

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-button');
            deleteButton.textContent = 'Delete';

            deleteButton.addEventListener('click', (e) => {
                const projectId = e.target.closest('.project-card').dataset.id;
                removeProject(projectId, this.manager, this);
              });

      card.appendChild(title);
      card.appendChild(description);
      card.appendChild(openButton);
      card.appendChild(deleteButton);

      this.container.appendChild(card);
      
        })
    }
}
