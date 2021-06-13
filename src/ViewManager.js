//here is where it will display everything and do DOM stuff

import buttonController from "./buttonController";
import projectManager from "./projectManager";
import DOMPresets from "./DOMPresets";


const viewManager = (function viewManager(){
    const projects = projectManager.getProjects();

    function updateInputs(){
        const inputs = document.querySelectorAll(".todo-toggle, .checklist-toggle");
        const projectInputs = document.querySelectorAll(".project-toggle");
        const inputsArr = [...inputs];
        const projectInputsArr = [...projectInputs];
        console.log(projectInputsArr);
        console.log(inputsArr);
        for(let i =0;i<projectInputsArr.length;i++){
            projectInputsArr[i].addEventListener("change",(event)=>{
                projectManager.deselect();
                projectManager.select(event.target.id);  
                if(projectManager.getSelected()){
                    displayTodos(); 
                }         
            })
        }
        for(let i =0;i<inputsArr.length;i++){
            inputsArr[i].addEventListener("change",(event)=>{
                selectedProject = projectManager.getSelected();
                selectedProject.deselect();
                selectedProject.select(event.target.id);    
            })
        }
        
    }
    
    //stuff to display projects
    function displayProjects(){
        DOMPresets.defaultState();
        for(let i = 0;i<projects.length;i++){
            DOMPresets.createProject(projects[i].getTitle(),projectManager.getProject(i).getChecked());
        }
        let selectedProject = projectManager.getSelected();
        if(selectedProject){
            displayTodos();
        }
    }
    function displayTodos(){
        DOMPresets.defaultTodos();
        let selectedProject = projectManager.getSelected();
        if(selectedProject){
            for(let i = 0;i<selectedProject.getToDoItems().length;i++){
                let currentTodo = selectedProject.getToDoItem(i);
                DOMPresets.createTodos(currentTodo.getTitle(),currentTodo.getDueDate(),currentTodo.getChecked());
            }
        }
        else{
            //alert("select project");
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

    displayProjects();
    return {
        displayProjects,
        updateInputs
    }

})();

export default viewManager;