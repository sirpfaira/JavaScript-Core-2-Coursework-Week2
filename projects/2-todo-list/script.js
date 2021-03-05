let list = document.getElementById("todo-list");
list.innerHTML = "";

function populateTodoList(todos) {
  /* Write your code to create todo list elements with completed 
  and delete buttons here, all todos should display inside the "todo-list" element.*/

  for (let todo of todos) {
    //Creating list item
    let listItem = document.createElement("li");
    listItem.className =
      "list-group-item d-flex justify-content-between align-items-center";
    listItem.innerText = `${todo.task}`;
    list.appendChild(listItem);

    //Creating span element
    let spanEl = document.createElement("span");
    listItem.appendChild(spanEl);
    spanEl.className = "badge bg-primary rounded-pill";

    //Creating check element
    let checkEl = document.createElement("i");
    checkEl.className = "fa fa-check";

    //Creating delete element
    let deleteEl = document.createElement("i");
    deleteEl.className = "fa fa-trash";

    //Attaching check and delete elements to the span
    spanEl.appendChild(checkEl);
    spanEl.appendChild(deleteEl);

    //Adding event listeners
    checkEl.addEventListener("click", function () {
      listItem.style.textDecoration = "line-through";
      // liEl.target.classList.toggle('checked');
    });
    deleteEl.addEventListener("click", function () {
      listItem.remove();
    });
  }
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let newTodo = document.querySelector("#todoInput");
  let todoObject = [{ task: newTodo.value, completed: false }];
  if (newTodo.value) {
    populateTodoList(todoObject);
    newTodo.value = "";
  } else {
    alert("Please enter some text for the ToDo name!");
  }
}

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(event) {
  // Write your code here...
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();

  let allToDos = document.querySelectorAll("li");
  for (let todo of allToDos) {
    if (todo.style.textDecoration === "line-through") {
      todo.remove();
    }
  }
}
