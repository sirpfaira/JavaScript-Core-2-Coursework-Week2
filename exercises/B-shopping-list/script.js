function shoppingList(groceries) {
  // Write your code here...
  let content = document.querySelector("#content");
  let unorderedList = document.createElement("ul");

  for (let grocery of groceries){
    let listItem = document.createElement("li");
    let itemText = document.createTextNode(grocery);
    listItem.appendChild(itemText);
    unorderedList.appendChild(listItem);
  }
  content.appendChild(unorderedList);
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
