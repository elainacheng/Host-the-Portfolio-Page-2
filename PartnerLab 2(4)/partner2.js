
function updatePage() {
    let name = document.getElementById("nameInput").value;
    let message = document.getElementById("messageInput").value;
    let bgColor = document.getElementById("bgColor").value;

    
    document.getElementById("greeting").textContent = name ? `Hello, ${name}!` : "Hello User!";
    document.getElementById("message").textContent = message || "Welcome to our interactive page.";

    
    document.body.style.backgroundColor = bgColor;
}


function addTodo() {
    let todoText = document.getElementById("todoInput").value;
    if (todoText.trim() !== "") {
        let listItem = document.createElement("li");
        listItem.textContent = todoText;

       
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete the item";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.onclick = function () {
            this.parentElement.remove();
        };

        listItem.appendChild(deleteBtn);
        document.getElementById("todoList").appendChild(listItem);
        document.getElementById("todoInput").value = ""; 
    }
}
