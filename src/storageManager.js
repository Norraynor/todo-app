import project from "./projectItem";
import projectManager from "./projectManager";
import viewManager from "./ViewManager";

const storManager = (function storManager (){
    let myStorage = window.localStorage;


    //save function
    function saveAll(){
        myStorage.clear();
        saveProjects();
            
    }
    function loadAll(){
        loadProjects();

    }
    function saveProjects(){
        let projects = projectManager.getProjects();
        let saveProjects = "";
        let stringArray = [];
        for(let i =0;i<projects.length;i++){
            stringArray[i] = projects[i].getParametersString();
        }
        saveProjects = stringArray.join(",");
        //saveProjects= projectArray.getParametersString().join(",");
        myStorage.setItem("projects",JSON.stringify(saveProjects));
    }
    function loadProjects(){
        const itemSize = 3;
        let loadProjects = "";
        projectManager.clearProjects();
        loadProjects = JSON.parse(myStorage.getItem("projects"));
        console.log(loadProjects);
        let loadedProjectsArray = loadProjects.split(",");
        console.log(loadedProjectsArray);
        for(let i=0;i<loadedProjectsArray.length;i+=3){
            let currentProject = loadedProjectsArray.slice(i,i+itemSize)
            if(currentProject[0] === "project"){
                console.log(currentProject);
                if(currentProject[2]==="true"){
                    projectManager.addProject(project(currentProject[1],true));
                }
                else{
                    projectManager.addProject(project(currentProject[1],false));
                }
            }
        }
        viewManager.displayProjects();
    }
    /*function saveTodos(){
        let projects = projectManager.getProjects();
        let saveTodos = "";
        let stringArray = [];
        for(let i =0;i<projects.length;i++){
            let allTodos = projects[i].getToDoItems();
            for(let j = 0;j<allTodos.length;j++){
                stringArray[i] = allTodos[i].getParametersString();
            }
        }
        saveProjects = stringArray.join(",");
        //saveProjects= projectArray.getParametersString().join(",");
        myStorage.setItem("projects",JSON.stringify(saveProjects));
    }*/

    return{
        saveAll,
        loadAll
    }
})();

export default storManager;