//To Do List
let allTasks;
let newTask;


//enabling the submit button to read in text and add to the to do list
submitButton=document.querySelector("#submit");
submitButton.addEventListener("click", submitTask);
function addToList(inner){
    newTask=document.createElement("li");
    newTask.innerText=inner;
    mainList=document.getElementById("toDoList");
    mainList.appendChild(newTask);
    removeButton= document.createElement("button");
    removeButton.innerText="\u2713";
    removeButton.className="remover";
    newTask.appendChild(removeButton);
    removeButton.addEventListener("click", removeTask);
    document.getElementById("task").value="";
}

//getting localStorage data and adding to the to do list
let localSave=JSON.parse(localStorage.getItem("tasks"))||{"tasks":[]};
for (let task of localSave["tasks"]){
    addToList(task);
}

function submitTask(){
    inputTask=document.getElementById("task");
    if (inputTask.value.length>0){
        addToList(inputTask.value);
        updateLocal();
    }
}
function removeTask(e){
    e.target.parentNode.remove();
    updateLocal();
}

function updateLocal(){
    allTasks = document.querySelectorAll("li");
    localSave["tasks"]=[];
    for (let task of allTasks){
        str=task.innerText;
        save_item=str.substring(0,str.length-2);
        localSave["tasks"].push(save_item);
    }
    localStorage.setItem("tasks", JSON.stringify(localSave));
}  

