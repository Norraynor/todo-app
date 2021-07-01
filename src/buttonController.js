import form from "./form";
import projectManager from "./projectManager";

const buttonController = (function(){
    const newProjectButton = document.querySelector(".newProjectButton");
    newProjectButton.addEventListener("click",()=>{
        form.showForm();
        form.projectForm();
    })
    const newToDoButton = document.querySelector(".newTodoButton");
    newToDoButton.addEventListener("click",()=>{
        if(projectManager.getSelected()){
            form.showForm();
            form.toDoForm();
        }else{
            alert("select project");
        }
    })
    const newChecklistButton = document.querySelector(".newChecklistButton");
    newChecklistButton.addEventListener("click",()=>{
        if(projectManager.getSelected().getSelected()){
            form.showForm();
            form.checklistForm();
        }else{
            alert("select To do");
        }
    })
})();

export default buttonController;