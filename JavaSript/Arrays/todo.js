const todos = [
    {
        text:"Walk the dog",
        completed: false
    },
    {   
        text: "pay eat", 
        completed: true
    },{
        text: " eat pizza", 
        completed: true
    },{    
        text: "buy coffee", 
        completed: false
    },{
        text: "lern", 
        completed: false
    },{
        text: "cook",
        completed: false
    }
]


// 1. convert array to array pf pbkects -> text, completed
// 2. Create funtionm re remove a todo by text value
function deleteTodo(array, text){
    const index = array.findIndex(function(note){
        return note.text.toLowerCase() === text.toLowerCase();
    })
    if(index > -1){
        array.splice(index, 1)
    }else{
        console.error("todo nicht gefunden")
    }
}

console.log(true < false)

getThingsTodo = function(todos){
    return todos.filter((todo) =>{
        //return !todo.completed
        return todo.completed === false 
    })
}
sortTodos = function(todos){
    todos.sort((a,b)=>{
        if(a.completed < b.completed){
            return -1
        }else if(b.completed < a.completed ){
            return 1
        }
        else{
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos);



//console.log(getThingsTodo(todos))


/* deleteTodo(todos, "COOOK")
console.log(todos) */