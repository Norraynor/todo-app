//forms handler

import project from "./projectItem";
import projectManager from "./projectManager";
import viewManager from "./ViewManager";

//change form and display it or hide it
const form = (function(){
    const formDiv = document.querySelector("#form-div");
    const title = document.querySelector("#element-title");
    const titleContainer = document.querySelector(".element-title");
    const description = document.querySelector("#element-description");
    const descriptionContainer = document.querySelector(".element-description");
    const priority = document.querySelector("#element-priority");
    const priorityContainer = document.querySelector(".element-priority");
    const dueDate = document.querySelector("#element-due-date");
    const dueDateContainer = document.querySelector(".element-due-date");
    const formTitle = document.querySelector("#form-title");
    const alert = document.querySelector("#alert");
    const submit = document.querySelector("#submit-button");
    let form = "";
    //object for keeping data form to be used in project/todo creation

    function showForm(){
        formDiv.classList.remove("hide");
        formDiv.classList.add("show");
    }
    function hideForm(){
        formDiv.classList.remove("show");
        formDiv.classList.add("hide");
    }
    function blankForm(){
        titleContainer.classList.remove("hide");
        titleContainer.classList.remove("show");
        descriptionContainer.classList.remove("hide");
        descriptionContainer.classList.remove("show");
        priorityContainer.classList.remove("hide");
        priorityContainer.classList.remove("show");
        dueDateContainer.classList.remove("hide");
        dueDateContainer.classList.remove("show");

    }
    function projectForm(){
        form = "project";
        formTitle.textContent = "Project";
        blankForm();
        titleContainer.classList.add("show");
        descriptionContainer.classList.add("hide");
        priorityContainer.classList.add("hide");
        dueDateContainer.classList.add("hide");
    }
    function toDoForm(){
        form = "todo";
        formTitle.textContent = "To Do";
        blankForm();
        titleContainer.classList.add("show");
        descriptionContainer.classList.add("show");
        priorityContainer.classList.add("show");
        dueDateContainer.classList.add("show");

    }
    function checklistForm(){
        form = "checklist";
        formTitle.textContent = "Checklist";
        blankForm();
        titleContainer.classList.add("show");
        descriptionContainer.classList.add("hide");
        priorityContainer.classList.add("show");
        dueDateContainer.classList.add("show");

    }

    function getFormData(event){
        let canHide = true;
        if(!title.value){
            alert.textContent = "Title missing";
            title.style.borderColor = "red";
            canHide=false;
            event.preventDefault();
        }
        else{
            title.style.borderColor = "green";
        }
        if(form === "todo"){
            if(!description.value){
                alert.textContent = "Description missing";
                description.style.borderColor = "red";
                canHide=false;
                event.preventDefault();
            }
            else{
                description.style.borderColor = "green";
            }
        }
        if(form === "todo" || form==="checklist"){
            if(!priority.value){
                alert.textContent = "Set Priority";
                priority.style.borderColor = "red";
                canHide=false;
                event.preventDefault();
            }
            else{
                priority.style.borderColor = "green";
            }
        }
        if(form === "todo" || form==="checklist"){
            if(!dueDate.value){
                alert.textContent = "Set Due Date";
                dueDate.style.borderColor = "red";
                canHide=false;
                event.preventDefault();
            }
            else{
                dueDate.style.borderColor = "green";
            }            
        }
        if(canHide){
            projectManager.addProject(project(title.value,description.value,priority.value,dueDate.value));
            alert.textContent = "";
            hideForm();
            event.preventDefault();
            //clean form
            cleanFormData();
            //updateList();
            //update send visual update 
            viewManager.displayProjects();
        }
    }
    function cleanFormData(){
        title.value = "";
        description.value = "";
        priority.value = "";
        dueDate.value = "";
    }
    submit.addEventListener("click",getFormData);

    return{
        showForm,
        hideForm,
        projectForm,
        toDoForm,
        checklistForm,
        getFormData
    }
})();

export default form;