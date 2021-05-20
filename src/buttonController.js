import form from "./form";

const buttonController = (function(){
    //button controller
    const newProjectButton = document.querySelector(".newProjectButton");
    newProjectButton.addEventListener("click",()=>{
        form.showForm();
        form.projectForm();
    })
    const newToDoButton = document.querySelector(".newTodoButton");
    newToDoButton.addEventListener("click",()=>{
        form.showForm();
        form.toDoForm();
    })
    const newChecklistButton = document.querySelector(".newChecklistButton");
    newChecklistButton.addEventListener("click",()=>{
        form.showForm();
        form.checklistForm();
    })
})();

export default buttonController;