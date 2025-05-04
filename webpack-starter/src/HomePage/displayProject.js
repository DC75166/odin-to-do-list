import { handleRemoveProject } from './handleRemoveProject.js';

export class displayProject{
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

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-button');
            deleteButton.textContent = 'Delete';

            deleteButton.addEventListener('click', (e) => {
                const projectId = e.target.closest('.project-card').dataset.id;
                handleRemoveProject(projectId, this.manager, this);
              });

      card.appendChild(title);
      card.appendChild(description);
      card.appendChild(deleteButton);

      this.container.appendChild(card);
      
        })
    }
}
