import project from "./projectItem";
import projectManager from "./projectManager";
import toDo from "./todoItem";
import viewManager from "./ViewManager";

const storManager = (function storManager (){
    let myStorage = window.localStorage;


    //save function
    function saveAll(){
        myStorage.clear();
        saveProjects();
        saveTodos();
        
            
    }
    function loadAll(){
        loadProjects();
        loadTodos();

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
        console.log("projects saved...");
    }
    function loadProjects(){
        const itemSize = 3;
        let loadProjects = "";
        projectManager.clearProjects();
        loadProjects = JSON.parse(myStorage.getItem("projects"));
        //console.log(loadProjects);
        let loadedProjectsArray = loadProjects.split(",");
        //console.log(loadedProjectsArray);
        for(let i=0;i<loadedProjectsArray.length;i+=itemSize){
            let currentProject = loadedProjectsArray.slice(i,i+itemSize)
            if(currentProject[0] === "project"){
                //console.log(currentProject);
                if(currentProject[2]==="true"){
                    projectManager.addProject(project(currentProject[1],true));
                }
                else{
                    projectManager.addProject(project(currentProject[1],false));
                }
            }
        }
        //viewManager.displayProjects();
        console.log("projects loaded...");
    }
    function saveTodos(){
        let projects = projectManager.getProjects();
        let saveTodos = [];
        let allSavedTodos = "";
        let stringArray = [];
        for(let i =0;i<projects.length;i++){
            let allTodos = projects[i].getToDoItems();
            for(let j = 0;j<allTodos.length;j++){
                stringArray[j] = allTodos[j].getParametersString(projects[i].getTitle());
            }
            saveTodos[i] = stringArray.join(",");
        }
        allSavedTodos = saveTodos.join(",");
        //saveProjects= projectArray.getParametersString().join(",");
        myStorage.setItem("todos",JSON.stringify(allSavedTodos));
        console.log("todos saved...");
    }
    function loadTodos(){
        const itemSize = 7;
        let loadTodos = "";
        loadTodos = JSON.parse(myStorage.getItem("todos"));
        //console.log(loadTodos);
        let loadedTodosArray = loadTodos.split(",");
        console.log(loadedTodosArray);
        for(let i=0;i<loadedTodosArray.length;i+=itemSize){
            let currentTodo = loadedTodosArray.slice(i,i+itemSize)
            if(currentTodo[0] === "todo"){
                console.log(currentTodo);
                let projects = projectManager.getProjects();                
                for(let i =0;i<projects.length;i++){
                    if(projects[i].getTitle() === currentTodo[6]){
                        if(currentTodo[5] === "true"){
                            projects[i].addToDoItem(toDo(currentTodo[1],currentTodo[2],currentTodo[3],currentTodo[4],true))
                        }
                        else{
                            projects[i].addToDoItem(toDo(currentTodo[1],currentTodo[2],currentTodo[3],currentTodo[4],false))

                        }
                    }
                }
            }
        }
        //viewManager.displayTodos();
        console.log("todos loaded...");
    }
    saveAll();
    projectManager.clearProjects();
    loadAll();

    function isSameElement(saveName,itemCount){
        //function to check if the element i'm trying to add is already in 
        //save file or no if it is then continue checking another addition 
        //if its not then add to the end of save
        loadFiles = JSON.parse(myStorage.getItem(saveName));

    }
    return{
        saveAll,
        loadAll
    }
})();

export default storManager;