const project = function(title,checked = false){
    title: title;
    checked: checked;
    let toDoArray = [];
    
    
    function addToDoItem(toDoItem){
        toDoArray.push(toDoItem);
    }
    function getParametersString(){
        let stringify = "project,"+title +","+checked;
        return stringify;
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
    const deselect = function(){
        for(let i =0;i<toDoArray.length;i++){
            toDoArray[i].setChecked(false);
        }
    }
    const select = function(title){
        console.log(title);
        title = title.replace("-todo","");
        for(let i =0;i<toDoArray.length;i++){
            if(toDoArray[i].getTitle() === title){
                toDoArray[i].setChecked(true);
            }
        }
    }
    
    return {
        addToDoItem,
        getToDoItems,
        getToDoItem,
        getTitle,
        setChecked,
        getChecked,
        getSelected,
        deselect,
        select,
        getParametersString
    }
};

export default project;