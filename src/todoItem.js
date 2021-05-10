const toDo = {};
const createToDo = function(title, description, dueDate, priority) {
    let todoObj = Object.create(toDo);
    todoObj.title = title;
    todoObj.description = description;
    todoObj.dueDate = dueDate;
    todoObj.priority = priority;

    return todoObj;  
}

export{
    createToDo
}