const inputBox= document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value ===''){
        alert("you have to add a task")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
       // console.log(li)
       listContainer.appendChild(li);
       let span = document.createElement("span");
       span.innerHTML= "\u00d7";
       li.appendChild(span)
    }
    inputBox.value="";
}
listContainer.addEventListener("click",function(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        //saveData();
        //showTask();
    }
},false);
