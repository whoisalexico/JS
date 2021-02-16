
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = ()=>{
    let userEnteredValue = inputBox.value;
    if(userEnteredValue.trim() !== 0)
    {
        addBtn.classList.add("active");
    }
    else {
        addBtn.classList.remove("active");
    }
}

showTasks();

addBtn.onclick = ()=>{
    let hours = new Date().getHours();
    let mins = new Date().getMinutes();
    let secs = new Date().getSeconds();
    let startTime = `${hours}:${mins}:${secs}`;

    var data;
    if(!localStorage.data) {
        data = [];
    } else {
        data = JSON.parse(localStorage.data);
    }

    let userEnteredValue = {
        todo: inputBox.value,
        startTime: startTime
    };
    data.push(userEnteredValue);

    localStorage.data = JSON.stringify(data);

    showTasks(startTime);
    addBtn.classList.remove("active");
}

function showTasks(startTime){
    let getLocalStorageData = localStorage.getItem("data");
    if(getLocalStorageData == null){
        listArray = [];
    }else{
        listArray = JSON.parse(getLocalStorageData);
    }
    const pendingTasksNumb = document.querySelector(".pendingTasks");
    pendingTasksNumb.textContent = listArray.length;
    if(listArray.length > 0){
        deleteAllBtn.classList.add("active");
    }else{
        deleteAllBtn.classList.remove("active");
    }
    let newLiTag = "";
    listArray.forEach((element, index) => {
        console.log(element)
        newLiTag += `<li>
                        <p>${element.todo}</p>
                        <span>${element.startTime}</span>
                        <span class="icon" onclick="deleteTask(${index})">
                        <i class="fa fa-trash"></i>
                        </span>
                     </li>`;
    });
    todoList.innerHTML = newLiTag;
    inputBox.value = "";
}

// delete task function
function deleteTask(index){
    let getLocalStorageData = localStorage.getItem('data');
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index, 1);
    localStorage.setItem('data', JSON.stringify(listArray));
    showTasks();
}

deleteAllBtn.onclick = ()=>{
    listArray = [];
    localStorage.setItem('data', JSON.stringify(listArray));
    showTasks();
}