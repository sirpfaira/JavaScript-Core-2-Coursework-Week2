function todoList(todos) {
  // Write your code here...
  let content = document.querySelector("#content");
  let unorderedList = document.createElement("ul");

  for (let todo of todos) {
    let listItem = document.createElement("li");
    let itemText = document.createTextNode(todo.todo);
    listItem.appendChild(itemText);
    listItem.addEventListener(
      "click",
      (strikeThroughText = function () {
        let currentState = listItem.style.textDecoration;
        if (currentState == "line-through")
          listItem.style.textDecoration = "none";
        else listItem.style.textDecoration = "line-through";
      })
    );
    unorderedList.appendChild(listItem);
  }

  content.appendChild(unorderedList);
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
