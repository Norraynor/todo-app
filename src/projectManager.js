import checklist from "./checklistItem";
import project from "./projectItem";
import toDo from "./todoItem";

const projectManager = (function projectManager (){
    let projectArray = [];
    const templateProj = project("templateProject");
    const addProject = function(project){
        return projectArray.push(project);
    }
    const clearProjects = function(){
        projectArray = [];
    }
    const getProjects = function(){
        return projectArray;
    }
    const getProject = function(index){
        return projectArray[index];
    }
    const deselect = function(){
        for(let i =0;i<projectArray.length;i++){
            projectArray[i].setChecked(false);
        }
    }
    const select = function(title){
        console.log(title);
        title = title.replace("-project","");
        for(let i =0;i<projectArray.length;i++){
            if(projectArray[i].getTitle() === title){
                projectArray[i].setChecked(true);
            }
        }
    }
    const getSelected = function(){
        let proj = "";
        for(let i = 0;i<projectArray.length;i++){
            if(projectArray[i].getChecked()){
                proj = projectArray[i];
            }
        }
        return proj;
    }
    addProject(templateProj);
    templateProj.setChecked("true");
    projectArray[0].addToDoItem(toDo("templateToDo","this is a template project","no dates yet",6));
    projectArray[0].getToDoItem(0).addChecklistItem(checklist("template checklist item","no dates yet",6));
    projectArray[0].addToDoItem(toDo("templateToDo1","this is a template project","no dates yet",6));
    projectArray[0].addToDoItem(toDo("templateToDo2","this is a template project","no dates yet",6));
    addProject(project("project1"));
    projectArray[1].addToDoItem(toDo("projectTodo","this is a template project","no dates yet",6));
    projectArray[1].addToDoItem(toDo("projectTodo1","this is a template project","no dates yet",6));
    projectArray[1].addToDoItem(toDo("projectTodo2","this is a template project","no dates yet",6));
    
    
    return {
        addProject,
        getProject,
        getProjects,
        deselect,
        select,
        getSelected,
        clearProjects
    }
})();

export default projectManager;