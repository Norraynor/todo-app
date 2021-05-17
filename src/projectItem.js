const project = function(){
    const createProject = function(title) {
        let proj = Object.create(projectTemplate);
        proj.title = title;
        proj.toDoArray = [];
        return proj;  
    }
    
    const addToDoItem = function(project,toDoItem){
        project.toDoArray.push(toDoItem);
    }
    const getToDoItems = function(project){
        return project.toDoArray;
    }
    const getToDoItem = function(index){
        return project.toDoArray[index];
    }
    return {
        createProject,
        addToDoItem,
        getToDoItems,
        getToDoItem
    }
};

export default project;