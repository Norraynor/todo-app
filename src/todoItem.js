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
    function getChecklistItems(){
        return checklistArray;
    }
    function getChecklistItem(index){
        return checklistArray[index];
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
    const deselect = function(){
        for(let i =0;i<checklistArray.length;i++){
            checklistArray[i].setChecked(false);
        }
    }
    const select = function(title){
        console.log(title);
        title = title.replace("-checklist","");
        for(let i =0;i<checklistArray.length;i++){
            if(checklistArray[i].getTitle() === title){
                checklistArray[i].setChecked(true);
            }
        }
    }
    
    return {
        addChecklistItem,
        getTitle,
        getDescription,
        getDueDate,
        getPriority,
        setChecked,
        getChecked,
        deselect,
        select,
        getChecklistItem,
        getChecklistItems
    }
};

export default toDo;