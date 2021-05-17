import checklist from "./checklistItem";
import project from "./projectItem";
import toDo from "./todoItem";

const projectManager = (function projectManager (){
    let projectArray = [];
    const templateProj = project.createProject("templateProject");
    const addProject = function(project){
        return projectArray.push(project);
    }
    const getProjects = function(){
        return projectArray;
    }
    const getProject = function(index){
        return projectArray[index];
    }
    addProject(templateProj);
    project.addToDoItem(projectArray[0],toDo.createToDo("templateToDo","this is a template project","no dates yet",6));
    toDo.addChecklistItem(projectArray[0].getToDoItem(0),checklist.createChecklistItem("template checklist item","no dates yet",6));

    return {
        addProject,
        getProject,
        getProjects
    }
})();

export default projectManager;