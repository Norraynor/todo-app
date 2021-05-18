const toDo = function(title, description, dueDate, priority){
    title: title;
    description: description;
    dueDate: dueDate;
    priority: priority;
    let checklistArray = [];
    
    function addChecklistItem(checklistItem){
        checklistArray.push(checklistItem);
    }
    function getTitle(){
        return title;
    }
    function getDescription(){
        return description;
    }
    function getDueDate(){
        return dueDate;
    }
    function getPriority(){
        return priority;
    }
    
    return {
        addChecklistItem,
        getTitle,
        getDescription,
        getDueDate,
        getPriority
    }
};

export default toDo;