export class Project{
    constructor(title,description){
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.todos = [];
    }
}

export class ProjectManager {
    constructor() {
        this.projectList = [];
    }

    add(project) {
        this.projectList.push(project);
    }

    remove(projectId) {
        this.projectList = this.projectList.filter(p => p.id !== projectId);
    }

    list() {
        return [...this.projectList];
    }
}
