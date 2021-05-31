const project = function(title,checked = false){
    title: title;
    checked: checked;
    let toDoArray = [];
    
    function addToDoItem(toDoItem){
        toDoArray.push(toDoItem);
    }
    function getToDoItems(){
        return toDoArray;
    }
    function getToDoItem(index){
        return toDoArray[index];
    }
    function getSelected(){
        let todo = "";
        for(let i = 0;i<toDoArray.length;i++){
            if(toDoArray[i].getChecked()){
                todo = toDoArray[i];
            }
        }
        return todo;
    }
    function setChecked(value){
        checked = value;
    }
    function getChecked(){
        return checked;
    }
    function getTitle(){
        return title;
    }
    
    return {
        addToDoItem,
        getToDoItems,
        getToDoItem,
        getTitle,
        setChecked,
        getChecked,
        getSelected
    }
};

export default project;