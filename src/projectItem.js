const projectTemplate = {
    //function to add items to this project
};
const createProject = function(title) {
    let proj = Object.create(projectTemplate);
    proj.title = title;
    return proj;  
}