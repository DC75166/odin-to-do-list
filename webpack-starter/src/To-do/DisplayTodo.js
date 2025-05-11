import "../style.css";
import { addTodo, DeleteToDo, ToggleToDo } from "./ToDoAction.js";

export class DisplayTodo {
  constructor(todoContainer, project) {
    this.todoContainer = document.querySelector(todoContainer);
    this.project = project;
  }

  clean() {
    this.todoContainer.innerHTML = "";
  }

  display() {
    this.clean();

    // ✅ Use this.project, not just project
    const headline = document.createElement("h2");
    headline.classList.add('todo-headline');
    headline.textContent = `To Do's for ${this.project.title}`;
    this.todoContainer.appendChild(headline); // Append headline ONCE

    // ✅ Build and append the form
    const form = document.createElement("form");
    form.classList.add('todo-form');
    form.innerHTML = `
      <input type="text" placeholder="Task Name" id="todo-title" class="todo-title" required />
      <input type="text" placeholder="Description" id="todo-desc" class="todo-desc" required />
      <select id="todo-priority" class="todo-priority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <input type="date" id="todo-date" class="todo-date" required />
      <button type="submit" class="todo-submit">Add Task</button>
    `;
    this.todoContainer.appendChild(form); // Append form ONCE

    // ✅ Correct querySelector for priority dropdown
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const title = document.querySelector(".todo-title").value.trim();
      const description = document.querySelector(".todo-desc").value.trim();
      const priority = document.querySelector(".todo-priority").value;
      const dueDate = document.querySelector(".todo-date").value;

      if (!title || !description || !dueDate) return;

      addTodo(this.project, title, description, priority, dueDate);
      this.display(); // Re-render updated to-do list
    });

    // ✅ Render each todo
    this.project.todos.forEach((todo) => {
      const div = document.createElement("div");
      div.classList.add("todo-item");

      div.innerHTML = `
        <input class="checkbox" type="checkbox" ${todo.completed ? "checked" : ""} />
        <span class="headlines"><strong>${todo.title}</strong>: ${todo.description}</span>
        <span class="specifics">Due: ${todo.dueDate}, Priority: ${todo.priority}</span>
        <button class="delete">Delete</button>
      `;

      div.querySelector(".checkbox").addEventListener("click", () => {
        ToggleToDo(this.project, todo.id);
      });

      div.querySelector(".delete").addEventListener("click", () => {
        DeleteToDo(this.project, todo.id);
        this.display(); // Re-render after deletion
      });

      this.todoContainer.appendChild(div); // Append each to-do card
    });
  }
}
