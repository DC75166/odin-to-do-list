class Todo{
    constructor(title,description,priority,due_date,completed){
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.due_date = due_date;
        this.completed = completed;
    }
}