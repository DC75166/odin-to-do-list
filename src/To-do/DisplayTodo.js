import "../style.css";
import { addTodo, DeleteToDo, ToggleToDo } from "./ToDoAction.js";
import { DisplayProject } from "../HomePage/displayProject.js";
import { EditTodo } from "./EditTodo.js";

export class DisplayTodo {
  constructor(todoContainer, project, formContainer, manager) {
    this.todoContainer = document.querySelector(todoContainer);
    this.formContainer = formContainer ? document.querySelector(formContainer) : null;
    this.project = project;
    this.manager = manager;
  }

  cleanMain() {
    this.todoContainer.innerHTML = "";
  }

  cleanForm(){
    document.querySelector(".newtodoForm").style.display = "none";
    this.formContainer.innerHTML = "";
  }

  renderForm() {
    this.cleanForm();

    const form = document.createElement("form");
    form.classList.add("todo-form");
    form.innerHTML = `
      <h3>Add Task to ${this.project.title}</h3>
      <input type="text" placeholder="Task Name" class="todo-title" required />
      <input type="text" placeholder="Description" class="todo-desc" required />
      <select class="todo-priority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <input type="date" class="todo-date" required />
      <button type="submit" class="todo-submit">Add Task</button>
    `;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = form.querySelector(".todo-title").value.trim();
      const description = form.querySelector(".todo-desc").value.trim();
      const priority = form.querySelector(".todo-priority").value;
      const dueDate = form.querySelector(".todo-date").value;

      if (!title || !description || !dueDate) return;

      addTodo(this.manager, this.project, title, description, priority, dueDate);
      this.display(); // Refresh task list
      this.renderForm(); // Clear form fields
    });

    this.formContainer.appendChild(form);
  }

  display() {
    this.cleanMain();

    const backButton = document.createElement('button');
    backButton.textContent = "← Go Back";
    this.todoContainer.appendChild(backButton);

    backButton.addEventListener('click',()=>{
       localStorage.removeItem('currentProjectId'); 
      this.cleanMain();
      this.cleanForm();
      document.querySelector(".newtodoForm").style.display = "flex";
        const displayProject = new DisplayProject('.main',this.manager);
        displayProject.render(this.manager.list());
    })

    // Render each todo
    this.project.todos.forEach((todo) => {
      const div = document.createElement("div");
      div.classList.add("todo-item");

      div.innerHTML = `
        <span class="headlines"><strong>${todo.title}</strong></span>
        <span class="description">${todo.description}</span>
        <span class="specifics">Due: ${todo.dueDate} </span>
        <span class="priority">Priority: ${todo.priority}</span>
        <input class="checkbox" type="checkbox" ${todo.completed ? "checked" : ""} />
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      `;

      div.querySelector(".checkbox").addEventListener("click", () => {
        ToggleToDo(this.manager,this.project, todo.id);
      });
      
      div.querySelector(".edit").addEventListener("click",()=>{
          const editTodo = new EditTodo(this.manager, this.project, todo.id, this.todoContainer,this);
                editTodo.openEditForm(); // Open the edit form
            });

      div.querySelector(".delete").addEventListener("click", () => {
        DeleteToDo(this.manager,this.project, todo.id);
        this.display(); // Re-render after deletion
      });

      this.todoContainer.appendChild(div); // Append each to-do card
    });
  }
}
