import buttonController from "./buttonController";
import project from "./projectItem";

const DOMPresets = (function(){
  const projects = document.querySelector(".project-container");
  const todos = document.querySelector(".todo-container");
  const description = document.querySelector(".description");

  function defaultState(){
    defaultProjects();
    defaultTodos();
    defaultChecklist();
  }
  function defaultProjects(){
    projects.textContent = "";
  }
  function defaultTodos(){
    todos.textContent = "";
  }
  function defaultChecklist(){
    description.textContent = "";
  }
  function newElementButton(str){
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add(`new-${str}`);
    const input = document.createElement("input");
    input.classList.add(`new-${str}-toggle`);
    input.type = "button";
    input.id = `new-${str}-button`;
    input.name = `new-${str}`;
    const label = document.createElement("label");
    label.classList.add(`new${str.charAt(0).toUpperCase()+str.slice(1)}Button`);
    label.htmlFor = `new-${str}-button`;
    label.innerText = "+NEW+"
    buttonDiv.appendChild(input);
    buttonDiv.appendChild(label);
    return buttonDiv;
  }
  function createProject(title,checked = false){
      const projectInput = document.createElement("input");
      projectInput.classList.add("project-toggle");
      projectInput.type = "radio";
      projectInput.checked = checked;
      let titleID = title.split(" ").join("-")+"-project";
      projectInput.id = titleID;
      projectInput.name = "projects";
      const projectLabel = document.createElement("label");
      projectLabel.classList.add("projectButton");
      projectLabel.htmlFor = titleID;
      projectLabel.innerText = title;
      const arrowsContainer = document.createElement("div");
      arrowsContainer.classList.add("arrows");
      const upButton = document.createElement("button");
      upButton.classList.add("priority-change", "arrow", "up");
      const downButton = document.createElement("button");
      downButton.classList.add("priority-change", "arrow", "down");
      arrowsContainer.appendChild(upButton);
      arrowsContainer.appendChild(downButton);
      projectLabel.appendChild(arrowsContainer);
      projects.appendChild(projectInput);
      projects.appendChild(projectLabel);
  }
  function createTodos(title,dueDate,checked = false){
    const input = document.createElement("input");
    input.classList.add("todo-toggle");
    input.type = "radio";
    input.checked = checked;
    let titleID = title.split(" ").join("-")+"-todo";
    input.id = titleID;
    input.name = "todo";
    const label = document.createElement("label");
    label.classList.add("todoButton");
    label.htmlFor = titleID;
    label.innerText = title;
    const para = document.createElement("p");
    para.classList.add("completion-status", "not-completed");
    para.textContent = "not completed";
    label.appendChild(para);
    const labelDiv = document.createElement("div");
    labelDiv.classList.add("due-date");
    const dueDatePara = document.createElement("p");
    dueDatePara.textContent = dueDate;
    labelDiv.appendChild(dueDatePara);
    label.appendChild(labelDiv);
    const arrowsContainer = document.createElement("div");
    arrowsContainer.classList.add("arrows");
    const upButton = document.createElement("button");
    upButton.classList.add("priority-change", "arrow", "up");
    const downButton = document.createElement("button");
    downButton.classList.add("priority-change", "arrow", "down");
    arrowsContainer.appendChild(upButton);
    arrowsContainer.appendChild(downButton);
    label.appendChild(arrowsContainer);
    todos.appendChild(input);
    todos.appendChild(label);
    /*
    if(checked){
      //create todo in description in checklist
      const description = document.querySelector(".description");
      const todoTitle = document.createElement("h4");
      todoTitle.classList.add("content-title");
      todoTitle.textContent = title;
      const todoDescription = document.createElement("div");
      todoDescription.classList.add("short-description");
      todoDescription.textContent = description;
      description.appendChild(todoTitle);
      description.appendChild(todoDescription);
    }*/
  }
  function updateToDoTitle(tTitle,tDescription){
      const description = document.querySelector(".description");
      description.textContent = "";
      const todoTitle = document.createElement("h4");
      todoTitle.classList.add("content-title");
      todoTitle.textContent = tTitle;
      const todoDescription = document.createElement("div");
      todoDescription.classList.add("short-description");
      todoDescription.textContent = tDescription;
      const checklist = document.createElement("div");
      checklist.classList.add("checklist");
      description.appendChild(todoTitle);
      description.appendChild(todoDescription);
      description.appendChild(checklist);
  }
  function createChecklist(title,dueDate){
    const description = document.querySelector(".description");
    const checklist = document.querySelector(".checklist");
    const checklistItemDiv = document.createElement("div");
    checklistItemDiv.classList.add("checklist-item");
    const input = document.createElement("input");
    input.classList.add("checklist-toggle");
    input.type = "checkbox";
    let titleID = title.split(" ").join("-");
    input.id= titleID;
    input.name = "checklist";
    input.checked = "";
    const label = document.createElement("label");
    label.classList.add("checklistButton");
    label.htmlFor = titleID;
    label.innerText = title;
    const para = document.createElement("p");
    para.textContent = dueDate;
    label.appendChild(para);
    checklistItemDiv.appendChild(input);
    checklistItemDiv.appendChild(label);
    checklist.appendChild(checklistItemDiv);
    description.appendChild(checklist);
  }
  return {
      createProject,
      defaultState,
      createTodos,
      createChecklist,
      defaultProjects,
      defaultTodos,
      defaultChecklist,
      updateToDoTitle
  }
})();
export default DOMPresets;