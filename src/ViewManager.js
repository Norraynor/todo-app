//here is where it will display everything and do DOM stuff

import buttonController from "./buttonController";
import projectManager from "./projectManager";
import DOMPresets from "./DOMPresets";


const viewManager = (function viewManager(){
    DOMPresets.createProject("LMAO");
    const projects = projectManager.getProjects();
    //stuff to display projects
    function displayProjects(){
        DOMPresets.defaultState();
        for(let i = 0;i<projects.length;i++){
            DOMPresets.createProject(projects[i].getTitle());
        }
        const inputs = document.querySelectorAll(".project-toggle, .todo-toggle, .checklist-toggle");
        const inputsArr = [...inputs];
        console.log(inputsArr);
        for(let i =0;i<inputsArr.length;i++){
            inputsArr[i].addEventListener("change",(event)=>{
            console.log(event.target);
            projectManager.deselect();
            projectManager.select(event.target.id);                
            })
        }
    }
    DOMPresets.defaultState();
    
    function updateList(){
        //here it will update view after any change
        DOMPresets.defaultState();
        let selectedProject = "";
        //loading projects todos and checklist and remembering selected
        //new projects should update only projects | new todos should update todos only etc
        for(let i = 0;i<projects.length;i++){
            if(projects[i].getChecked())
            {
                DOMPresets.createProject(projects[i].getTitle(),true);
                selectedProject = projects[i];
            }
            else{
                DOMPresets.createProject(projects[i].getTitle());
            }
        }
        let toDos = selectedProject.getToDoItems();
        for(let i = 0;i<toDos.length;i++){
            if(toDos[i].getChecked())
            {
                DOMPresets.createTodos(toDos[i].getTitle(),toDos[i].getDescription(),toDos[i].getDueDate(),true);
            }
            else{
                DOMPresets.createTodos(toDos[i].getTitle(),toDos[i].getDescription(),toDos[i].getDueDate());
            }
        }
    }
    // display todos
    //display stuff related to todos like completed todo and due-date
    //display checklists
    //display/hide form
    /*
    const addProject = function(project){
        return projectArray.push(project);
    }
    const getProjects = function(){
        return projectArray;
    }
    const getProject = function(index){
        return projectArray[index];
    }
    */

    return {
        displayProjects
    }

})();

export default viewManager;