import "../style.css";

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

    const headline = document.createElement("h2");
    headline.textContent = `To Do's for ${project.title}`;

    const form = document.createElement("form");
    form.innerHTML = `<input type="text" placeholder="Task Name" id="todo-title" class="todo-title" required />
        <input type="text" placeholder="Description" id="todo-desc" class="todo-desc" required />
        <select id="todo-priority" class="todo-priority">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input type="date" id="todo-date" class="todo-date" required />
        <button type="submit" class="todo-submit">Add Task</button>`;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const title = document.querySelector(".todo-title");
      const description = document.querySelector(".todo-desc");
      const priority = document.querySelector("todo-priority");
      const dueDate = document.querySelector(".dueDate");

      addTodo(title, description, priority, dueDate);
      this.render();
    });

    this.project.todos.forEach((todo) => {
      const div = document.createElement("div");
      div.classList.add("todo-item");

      div.innerHTML = `
        <input class="checkbox" type="checkbox" ${
          todo.completed ? "checked" : ""
        } />
        <span class="headlines"><strong>${todo.title}</strong>: ${
        todo.description
      }</span>
        <span class="specifics">Due: ${todo.dueDate}, Priority: ${
        todo.priority
      }</span>
        <button class="delete">Delete</button>`;

      div.querySelector(".checkbox").addEventListener("click", () => {
        ToggleToDo(this.project, todo.id);
      });

      div.querySelector(".delete").addEventListener("clicke", () => {
        DeleteToDo(this.project, todo.id);
        this.render();
      });

      this.todoContainer.appendChild(headline);
      this.todoContainer.appendChild(form);
      this.todoContainer.appendChild(div);
    });
  }
}
