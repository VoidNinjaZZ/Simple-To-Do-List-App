const newTodoInput= document.getElementById("newTodoInput");
const addBtn= document.getElementById("addBtn");
const toDoList= document.getElementById("toDoList");

addBtn.addEventListener("click",()=>{
    const newTodoText= newTodoInput.value;
    
    if(newTodoText !==""){
        const newTodoItem=document.createElement("li");
        newTodoItem.innerText=newTodoText;
        const deleteTodoBtn= document.createElement("button");
        deleteTodoBtn.innerText="X";

        deleteTodoBtn.classList.add("delete-todo-btn");
        deleteTodoBtn.addEventListener("click",function(){
            newTodoItem.remove();
   });
newTodoItem.appendChild(deleteTodoBtn);
toDoList.appendChild(newTodoItem);
newTodoInput.value= "";
}


});

newTodoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addBtn.click();
    }
});