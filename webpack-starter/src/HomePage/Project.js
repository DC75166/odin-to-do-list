class Project{
    constructor(title,desciption){
        this.id = crypto.randomUUID();
        this.title = title;
        this.desciption = desciption;
    }
}

export default Project;