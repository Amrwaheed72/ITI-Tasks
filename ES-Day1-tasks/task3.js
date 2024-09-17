function createProject(projectId, projectName, duration) {
    const project = {
        projectId,
        projectName,
        duration,
        printData() {
            console.log(`Project ID: ${this.projectId}, Project Name: ${this.projectName}, Duration: ${this.duration}`);
        }
    };
    return project;
}

createProject('123', 'Website', '3 months');
// myProject.printData();  
