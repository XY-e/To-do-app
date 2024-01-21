const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//add data
function addTask(){
    if(inputBox.value ===''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li"); /*Create & declare a new list item (li) by using the document.createElement method.*/
        li.innerHTML= inputBox.value; /*text entered into the inputBox will become the content of the list item*/
        /* innerHTML property sets or returns the HTML content (inner HTML) of an element. */
        listContainer.appendChild(li);/*The new list item (li) is appended (added) to the listContainer.*/
        
        let span=document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span);


    }
    inputBox.value = "";
    saveData();
}

//delete data
listContainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

//save data
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
