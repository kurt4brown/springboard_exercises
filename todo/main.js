//To Do List
let allTasks;
let newTask;

function updateLocal(){  //define update local storage
    allTasks = document.querySelectorAll("li");
    localSave["tasks"]=[];
    for (let task of allTasks){
        str=task.innerText;
        save_item=str.substring(0,str.length-2);
        localSave["tasks"].push(save_item);
    }
    localStorage.setItem("tasks", JSON.stringify(localSave));
}  

//getting localStorage data and adding to the to do list
let localSave=JSON.parse(localStorage.getItem("tasks"))||{"tasks":[]};
for (let task of localSave["tasks"]){  //each task in local storage is made into inner text of list elements
    addToList(task);
}


//enabling the submit button to read in text and add to the to do list
submitButton=document.querySelector("#submit");
submitButton.addEventListener("click", submitTask);
function addToList(inner){
    newTask=document.createElement("li"); //creating an empty li element
    newTask.innerText=inner; //filling the list element with the input data

    mainList=document.getElementById("toDoList"); //isolating the complete form and adding in the li element
    mainList.appendChild(newTask);

    removeButton= document.createElement("button"); //adding the remove button
    removeButton.innerText="\u2713";
    removeButton.className="remover";
    newTask.appendChild(removeButton);
    removeButton.addEventListener("click", removeTask);

    document.getElementById("task").value="";
}



function submitTask(){ // put the input data into the addToListFunction 
    inputTask=document.getElementById("task");
    if (inputTask.value.length>0){
        addToList(inputTask.value);
        updateLocal();  //update local storage
    }
}

function removeTask(e){  //remove items that are checked off
    e.target.parentNode.remove();
    updateLocal(); //update local storage
}