//here is where it will display everything and do DOM stuff

import form from "./form";
import projectManager from "./projectManager";

const viewManager = (function viewManager(){
    //button controller
    const newProjectButton = document.querySelector(".newProjectButton");
    newProjectButton.addEventListener("click",()=>{
        form.showForm();
        form.projectForm();
    })
    const newToDoButton = document.querySelector(".newTodoButton");
    const newChecklistButton = document.querySelector(".newChecklistButton");
    //stuff to display projects
    function displayProjects(){
        const projects = projectManager.getProjects();
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

    return {
        addProject,
        getProject,
        getProjects
    }
    */

})();

export default viewManager;