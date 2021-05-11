const projectManager = (function projectManager (){
    let projectArray = [];

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

})();

export default projectManager;