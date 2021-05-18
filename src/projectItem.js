const project = function(title){
    title: title;
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
    function getTitle(){
        return title;
    }
    
    return {
        addToDoItem,
        getToDoItems,
        getToDoItem,
        getTitle
    }
};

export default project;