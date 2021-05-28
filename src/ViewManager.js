//here is where it will display everything and do DOM stuff

import buttonController from "./buttonController";
import projectManager from "./projectManager";
import DOMPresets from "./DOMPresets";


const viewManager = (function viewManager(){
    DOMPresets.createProject("LMAO");
    //stuff to display projects
    function displayProjects(){
        const projects = projectManager.getProjects();
        for(let i = 0;i<projects.length;i++){
            console.log(projects[i].getTitle());
            DOMPresets.createProject(projects[i].getTitle());
        }
    }
    DOMPresets.defaultState();
    
    function updateList(){
        //here it will update view after any change
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