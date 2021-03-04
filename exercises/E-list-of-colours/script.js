function listOfColours(colours) {
  // Write your code here...
  let select = document.createElement("select");
  let content = document.getElementById("content");
  let paragraph = document.createElement("p");

  colours.forEach((color) => {
    let option = document.createElement("option");
    option.textContent = color;
    select.appendChild(option);

    select.addEventListener("change", function () {
      paragraph.innerHTML = "You have selected: " + select.value;
      paragraph.style.color = select.value;
    });
  });

  content.appendChild(select);
  content.appendChild(paragraph);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
