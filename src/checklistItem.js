const checklistItem = {};
const createChecklistItem = function(title, dueDate, priority) {
    let checklistObj = Object.create(checklistItem);
    checklistObj.title = title;
    checklistObj.dueDate = dueDate;
    checklistObj.priority = priority;

    return checklistObj;  
}

export{
    createChecklistItem
}