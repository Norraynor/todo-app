const checklist = function(title, dueDate, priority){    
    title: title;
    dueDate: dueDate;
    priority: priority;

    function getTitle(){
        return title;
    }
    function getDueDate(){
        return dueDate;
    }
    function getPriority(){
        return priority;
    }

    return{
        getTitle,
        getDueDate,
        getPriority
    }
};

export default checklist;