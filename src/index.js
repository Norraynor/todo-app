import projectManager from "./projectManager";
import viewManager from "./ViewManager";
import form from "./form";
import css from "./index.css"
import "./index.css";

//here everything will go together

//todo item will be created whenever is needed - factory function

//todo will have title, description, due date, priority

//list of todos should be a project or a separate list of todos

// default project at start to put todos in

/*
//get project array
const projects = projectManager.getProjects();
//add new project and return new length of projects array
const newProj = projectManager.addProject(createProject("ROFL"));
//get project of this array index
const currentProj = projectManager.getProject(newProj-1);
//adds todo to project
addToDoItem(currentProj,createToDo("1","2","3","4"));
console.log(projects);
console.log(currentProj);

*/
console.log(projectManager.getProjects()[0].getTitle());
console.log(projectManager.getProjects()[0].getToDoItem(0).getTitle());


//console.log(createProject("lul").createToDo("a","b","c","d"));