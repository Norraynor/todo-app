//here is where it will display everything and do DOM stuff

import projectManager from "./projectManager";

const viewManager = (function viewManager (){
    //let projectArray = [];
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

export default projectManager;