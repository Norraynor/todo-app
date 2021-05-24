const DOMPresets = (function(){
    function createProject(title){
        const projects = document.querySelector(".projects");
        const projectInput = document.createElement("input");
        projectInput.classList.add("project-toggle");
        projectInput.type = "radio";
        let titleID = title.split(" ").join("-");
        projectInput.id = titleID;
        projectInput.name = "projects";
        projectInput.checked = "";
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
        const projectContainer = document.createElement("div");
        projectContainer.classList.add("project");
        projects.appendChild(projectInput);
        projects.appendChild(projectLabel);
        projects.appendChild(projectContainer);       
    }
    function createTodos(){
        
    }
    /*
    <input class="project-toggle" type="radio" id="project-title" name="projects" checked>
          <label class="projectButton" for="project-title">
            Project title1
            <div class="arrows">
              <button class="priority-change arrow up"></button>
              <button class="priority-change arrow down"></button>
            </div>
          </label>   
          <div class="project">
            <div class="todos">
              <div class="new-todo">
                <input class="new-todo-toggle" type="radio" id="new-todo-button" name="new-todo" checked>
                <label class="newTodoButton" for="new-todo-button">+NEW TO DO+</label> 
              </div> 

              <input class="todo-toggle" type="radio" id="todo-title" name="todo" checked>
              <label class="todoButton" for="todo-title">Todo title1 
                <p class="completion-status not-completed">not completed</p>
                <div class="due-date">
                  <p>due: xd-xd-xdxd</p>
                </div>

                <div class="arrows">
                  <button class="priority-change arrow up"></button>
                  <button class="priority-change arrow down"></button>
                </div>
              </label>                
              <div class="todo"> 
                <div class="content">
                  <div class=new-checklist>
                    <input class="new-checklist-toggle" type="radio" id="new-checklist-button" name="new-checklist" checked>
                    <label class="newChecklistButton" for="new-checklist-button">+NEW ITEM+</label>
                  </div>
                  <div class="description">
                    <h4 class="content-title">todo-title1</h4>
                    <div class="short-description">
                      this is where a short description will be present
                    </div>
                    <div class="checklist">
                      <div class="checklist-item">
                        <input class="checklist-toggle" type="checkbox" id="checklist-title" name="checklist" checked>
                        <label class="checklistButton" for="checklist-title">checklist title1 
                          <p>due date: xx-yy-zzzz</p>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
                       
          </div>    
          */
    return {
        createProject
    }
})();
export default DOMPresets;