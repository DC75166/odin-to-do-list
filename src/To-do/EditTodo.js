// src/ToDo/EditTodo.js

import { EditTodo as EditTodoAction } from './ToDoAction.js'; // Import the EditTodo function from todoActions

export class EditTodo {
    constructor(manager, project, todoId, todoContainer, displayTodo) {
        this.manager = manager;
        this.project = project;
        this.todoId = todoId;
        this.todoContainer = todoContainer;
        this.displayTodo = displayTodo;  // Pass the displayTodo instance to trigger the re-render
    }

    openEditForm() {
        const todo = this.project.todos.find(t => t.id === this.todoId);

        if (todo) {
            const modal = document.createElement("div");
            modal.classList.add("edit-modal");

            modal.innerHTML = `
                <div class="edit-modal-content">
                    <h3>Edit Todo</h3>
                    <input type="text" class="edit-title" value="${todo.title}" />
                    <textarea class="edit-description">${todo.description}</textarea>
                    <select class="edit-priority">
                        <option value="low" ${todo.priority === "low" ? "selected" : ""}>Low</option>
                        <option value="medium" ${todo.priority === "medium" ? "selected" : ""}>Medium</option>
                        <option value="high" ${todo.priority === "high" ? "selected" : ""}>High</option>
                    </select>
                    <input type="date" class="edit-due-date" value="${todo.dueDate}" />
                    <button class="save">Save</button>
                    <button class="cancel">Cancel</button>
                </div>
            `;

            // Save button click event
            modal.querySelector(".save").addEventListener("click", () => {
                const updatedData = {
                    title: modal.querySelector(".edit-title").value,
                    description: modal.querySelector(".edit-description").value,
                    priority: modal.querySelector(".edit-priority").value,
                    dueDate: modal.querySelector(".edit-due-date").value,
                };

                // Call the EditTodo function to update the todo
                EditTodoAction(this.manager, this.project, this.todoId, updatedData);

                // Close the modal
                this.closeModal(modal);

                // Re-render the todo list to reflect the update
                this.displayTodo.display();
            });

            // Cancel button click event
            modal.querySelector(".cancel").addEventListener("click", () => {
                this.closeModal(modal); // Close modal without saving
            });

            this.todoContainer.appendChild(modal); // Append the modal to the container
        }
    }

    // Close the edit modal
    closeModal(modal) {
        modal.remove();
    }
}
