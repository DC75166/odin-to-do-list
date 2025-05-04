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
