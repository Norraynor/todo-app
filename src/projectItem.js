const projectTemplate = {
    //function to add items to this project
};
const createProject = function(title) {
    let proj = Object.create(projectTemplate);
    proj.title = title;
    proj.toDoArray = [];
    return proj;  
}

const addToDoItem = function(project,toDoItem){
    project.toDoArray.push(toDoItem);
}

export{
    createProject,
    addToDoItem
}