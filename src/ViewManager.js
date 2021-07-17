//here is where it will display everything and do DOM stuff

import buttonController from "./buttonController";
import projectManager from "./projectManager";
import DOMPresets from "./DOMPresets";
import "date-fns";
import { compareAsc, parseISO } from "date-fns";
import form from "./form";
import storManager from "./storageManager";

const viewManager = (function viewManager(){    

    function updateInputs(){
        const inputs = document.querySelectorAll(".checklist-toggle");
        const projectInputs = document.querySelectorAll(".project-toggle");
        const todoInputs = document.querySelectorAll(".todo-toggle");
        const inputsArr = [...inputs];
        const projectInputsArr = [...projectInputs];
        const todoInputsArr = [...todoInputs];
        /*
        console.log(projectInputsArr);
        console.log(inputsArr);
        console.log(todoInputsArr);
        */
        
        function todoEvent(event){
            storManager.loadAll();
            let selectedProject = projectManager.getSelected();
            selectedProject.deselect();
            selectedProject.select(event.target.id);  
            //console.log("currently selected todo: "+selectedProject.getSelected().getTitle());
            DOMPresets.updateToDoTitle(selectedProject.getSelected().getTitle(),selectedProject.getSelected().getDescription());
            //display checklist  
            if(selectedProject.getSelected()){
                displayChecklist(selectedProject.getSelected()); 
            } 
        }
        function checklistEvent(event){
            let selectedTodo = projectManager.getSelected().getSelected();
                
            selectedTodo.deselect();
            selectedTodo.select(event.target.id);  
            console.log("currently selected checklist: "+selectedTodo.getTitle());
            
        }
        for(let i =0;i<projectInputsArr.length;i++){
            //--ensures that event is attached only once--
            if(projectInputsArr[i].projectEvent){
                projectInputsArr[i].removeEventListener("change",projectInputsArr[i].projectEvent);
            }
            projectInputsArr[i].projectEvent = (event)=>{
                projectManager.deselect();
                projectManager.select(event.target.id); 
                displayTodos();  
            }
            projectInputsArr[i].addEventListener("change",projectInputsArr[i].projectEvent);
            //--works!--
        }
        for(let i =0;i<todoInputsArr.length;i++){
            todoInputsArr[i].addEventListener("change",todoEvent)
        }
        for(let i =0;i<inputsArr.length;i++){
            inputsArr[i].addEventListener("change",checklistEvent)
        }
        
    }
    
    //stuff to display projects
    function displayProjects(){
        const projects = projectManager.getProjects();
        DOMPresets.defaultState();
        for(let i = 0;i<projects.length;i++){
            DOMPresets.createProject(projects[i].getTitle(),projectManager.getProject(i).getChecked());
        }
        let selectedProject = projectManager.getSelected();
        if(selectedProject){
            displayTodos();
        }
        updateInputs();
    }

    function displayTodos(){
        DOMPresets.defaultTodos();
        let selectedProject = projectManager.getSelected();
        if(selectedProject){
            for(let i = 0;i<selectedProject.getToDoItems().length;i++){
                let currentTodo = selectedProject.getToDoItem(i);
                DOMPresets.createTodos(currentTodo.getTitle() ,currentTodo.getDueDate(),currentTodo.getChecked());
                if(currentTodo.getChecked()){
                    DOMPresets.updateToDoTitle(selectedProject.getSelected().getTitle(),selectedProject.getSelected().getDescription());
                }
                if(compareAsc(Date.now(),parseISO(currentTodo.getDueDate()))===-1){
                    DOMPresets.changeTodoCompletion(currentTodo,true);
                }
                else{
                    DOMPresets.changeTodoCompletion(currentTodo,false);
                }
            }
            if(selectedProject.getSelected()){
                //displayChecklist(selectedProject.getSelected());
            }
        }
        else{
            //alert("select project");
        }
        updateInputs();
    }

    function displayChecklist(selectedTodo){
        DOMPresets.defaultChecklist();
        console.log(selectedTodo.getTitle());
        DOMPresets.updateToDoTitle(selectedTodo.getTitle(),selectedTodo.getDescription());
            
        if(selectedTodo){
            for(let i = 0;i<selectedTodo.getChecklistItems().length;i++){
                let currentChecklist = selectedTodo.getChecklistItem(i);
                DOMPresets.createChecklist(currentChecklist.getTitle(),currentChecklist.getDueDate());
            }
        }
        else{
            //alert("select project");
        }
    }
    /*
    let loadedBJson = form.myStorage.getItem("projects");
    console.log(loadedBJson);
    let loaded = JSON.parse(form.myStorage.getItem("projects"));
    console.log(loaded);
    */
    displayProjects();
    return {
        displayProjects,
        displayTodos,
        displayChecklist,
        updateInputs
    }

})();

export default viewManager;