const toDo = function(title, description, dueDate, priority, checked = false){
    title: title;
    description: description;
    dueDate: dueDate;
    priority: priority;
    checked: checked;
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
    function setChecked(value){
        checked = value;
    }
    function getChecked(){
        return checked;
    }
    
    return {
        addChecklistItem,
        getTitle,
        getDescription,
        getDueDate,
        getPriority,
        setChecked,
        getChecked
    }
};

export default toDo;