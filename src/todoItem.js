const toDo = function(){
    const createToDo = function(title, description, dueDate, priority) {
        let todoObj = Object.create(toDo);
        todoObj.title = title;
        todoObj.description = description;
        todoObj.dueDate = dueDate;
        todoObj.priority = priority;
        todoObj.checklistArray = [];
    
        return todoObj;  
    }
    const addChecklistItem = function(toDo,checklistItem){
        toDo.checklistArray.push(checklistItem);
    }
    
    return {
        createToDo,
        addChecklistItem
    }
};

export default toDo;