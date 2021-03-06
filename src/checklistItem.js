const checklist = function(title, dueDate, priority, checked = false){    
    title: title;
    dueDate: dueDate;
    priority: priority;
    checked: checked;

    function getParametersString(parentTitle){
        let stringify = "checklist,"+title +","+ dueDate+","+ priority +","+checked+","+parentTitle;
        return stringify;
    }
    function getTitle(){
        return title;
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

    return{
        getTitle,
        getDueDate,
        getPriority,
        setChecked,
        getChecked
    }
};

export default checklist;