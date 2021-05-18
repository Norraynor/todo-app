import checklist from "./checklistItem";
import project from "./projectItem";
import toDo from "./todoItem";

const projectManager = (function projectManager (){
    let projectArray = [];
    const templateProj = project("templateProject");
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
    projectArray[0].addToDoItem(toDo("templateToDo","this is a template project","no dates yet",6));
    projectArray[0].getToDoItem(0).addChecklistItem(checklist("template checklist item","no dates yet",6));

    return {
        addProject,
        getProject,
        getProjects
    }
})();

export default projectManager;