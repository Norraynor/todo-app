import checklist from "./checklistItem";
import project from "./projectItem";
import toDo from "./todoItem";

const projectManager = (function projectManager (){
    let myStorage = window.localStorage;
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

    //save function
    function saveAll(){
        myStorage.clear();
        saveProjects();
            
    }
    function loadAll(){
        loadProjects();

    }
    function saveProjects(){
        let saveProjects = "";
        let stringArray = [];
        for(let i =0;i<projectArray.length;i++){
            stringArray[i] = projectArray[i].getParametersString();
        }
        saveProjects = stringArray.join(",");
        //saveProjects= projectArray.getParametersString().join(",");
        myStorage.setItem("projects",JSON.stringify(saveProjects));
    }
    function loadProjects(){
        const itemSize = 3;
        let loadProjects = "";
        projectArray = [];
        loadProjects = JSON.parse(myStorage.getItem("projects"));
        console.log(loadProjects);
        let loadedProjectsArray = loadProjects.split(",");
        console.log(loadedProjectsArray);
        for(let i=0;i<loadedProjectsArray.length;i+=3){
            let currentProject = loadedProjectsArray.slice(i,i+itemSize)
            if(currentProject[0] === "project"){
                console.log(currentProject);
                addProject(project(currentProject[1],currentProject[2]));
            }
        }
    }
    addProject(templateProj);
    templateProj.setChecked("true");
    projectArray[0].addToDoItem(toDo("templateToDo","this is a template project","no dates yet",6));
    projectArray[0].getToDoItem(0).addChecklistItem(checklist("template checklist item","no dates yet",6));

    return {
        addProject,
        getProject,
        getProjects,
        deselect,
        select,
        getSelected,
        saveAll,
        loadAll
    }
})();

export default projectManager;