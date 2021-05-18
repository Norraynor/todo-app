//forms handler
//change form and display it or hide it
const form = (function(){
    const formDiv = document.querySelector("#form-div");
    const title = document.querySelector(".element-title");
    const description = document.querySelector(".element-description");
    const priority = document.querySelector(".element-priority");
    const dueDate = document.querySelector(".element-due-date");
    const formTitle = document.querySelector("#form-title");

    function showForm(){
        formDiv.classList.remove("hide");
        formDiv.classList.add("show");
    }
    function hideForm(){
        formDiv.classList.remove("show");
        formDiv.classList.add("hide");
    }
    function blankForm(){
        title.classList.remove("hide");
        title.classList.remove("show");
        description.classList.remove("hide");
        description.classList.remove("show");
        priority.classList.remove("hide");
        priority.classList.remove("show");
        dueDate.classList.remove("hide");
        dueDate.classList.remove("show");

    }
    function projectForm(){
        formTitle.textContent = "Project";
        blankForm();
        title.classList.add("show");
        description.classList.add("hide");
        priority.classList.add("hide");
        dueDate.classList.add("hide");
    }
    function toDoForm(){
        formTitle.textContent = "To Do";
        blankForm();
        title.classList.add("show");
        description.classList.add("show");
        priority.classList.add("show");
        dueDate.classList.add("show");

    }
    function checklistForm(){
        formTitle.textContent = "Checklist";
        blankForm();
        title.classList.add("show");
        description.classList.add("hide");
        priority.classList.add("show");
        dueDate.classList.add("show");

    }

    return{
        showForm,
        hideForm,
        projectForm,
        toDoForm,
        checklistForm
    }
})();

export default form;