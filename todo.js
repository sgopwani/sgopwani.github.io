var TodoList = [];
var completedTodos = 0;

function addTodo(){ 
    //var box = document.createElement('input')
    //box.setAttribute("type", "text")
    var newTodo = {
        Todo: "empty",
        Checkbox: "empty", 
        Completed: false,
        Button: "empty"
    }
    
    newTodo.Todo = prompt("Please enter the Todo")        // Get Input
    if (newTodo.Todo == ""){
      alert("No Todo entered!")
    }
    else
    {
    newTodo.Checkbox = document.createElement("input")    
    newTodo.Checkbox.setAttribute("type", "checkbox")     // Make Checkbox
    var ul = document.getElementById("Todos")
    var li = document.createElement("li")
    li.appendChild(document.createTextNode(newTodo.Todo))
    li.appendChild(newTodo.Checkbox)
    newTodo.Button = li.appendChild(document.createElement("button"))     //Make Delete Button
    newTodo.Button.innerHTML = "Delete"
    ul.appendChild(li)
    TodoList.push(newTodo)

    newTodo.Checkbox.addEventListener("click", function(){
      if (newTodo.Completed == false){
        newTodo.Completed = true
        completedTodos++
        updateCounts()
      }
      else{
        newTodo.Completed = false
        completedTodos--
        updateCounts()
      }
    })

    newTodo.Button.addEventListener("click", function(){
      ul.removeChild(li)
      var index = TodoList.indexOf(newTodo)
      TodoList.splice(index, 1)
      updateCounts()
    })

    updateCounts() 
    }   
   } 

function updateCounts(){
  document.getElementById("ToDoCount").innerHTML = "Total Todos: " + TodoList.length
  document.getElementById("TodosLeft").innerHTML = "Todos Left: " + (TodoList.length - completedTodos)
  if (completedTodos == TodoList.length)
        {alert("Congratulations!  You completed all of your Todos!!!")}
}





