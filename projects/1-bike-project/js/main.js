//PART 1
let jumbotron = document.querySelector(".jumbotron");
let donate = document.querySelectorAll(".buttons a")[0];
let volunteer = document.querySelectorAll(".buttons a")[1];

let blueButton = document.querySelector("#blueBtn");
blueButton.addEventListener("click", function () {
  jumbotron.style.backgroundColor = `#588fbd`;
  donate.style.backgroundColor = `#ffa500`;
  volunteer.style.backgroundColor = `black`;
  volunteer.style.color = `white`;
});

let orangeButton = document.querySelector("#orangeBtn");
orangeButton.addEventListener("click", function () {
  jumbotron.style.backgroundColor = `#f0ad4e`;
  donate.style.backgroundColor = `#5751fd`;
  volunteer.style.backgroundColor = `#31b0d5`;
  volunteer.style.color = `white`;
});

let greenButton = document.querySelector("#greenBtn");
greenButton.addEventListener("click", function () {
  jumbotron.style.backgroundColor = `#87ca8a`;
  donate.style.backgroundColor = `black`;
  volunteer.style.backgroundColor = `#8c9c08`;
});

///PART 2
let submitButton = document.querySelector("form button");
let emailField = document.querySelector("#exampleInputEmail1");
let nameField = document.querySelector("#example-text-input");
let descField = document.querySelector("#exampleTextarea");

submitButton.addEventListener("click", function (event) {
  if (nameField.value.length === 0) {
    nameField.style.backgroundColor = "red";
  }
  if (descField.value.length === 0) {
    descField.style.backgroundColor = "red";
  }
  if (emailField.value.length === 0 || !emailField.value.includes("@")) {
    emailField.style.backgroundColor = "red";
  } else {
    window.alert("Thank you for filling out the form!");
    emailField.value = "";
    nameField.value = "";
    descField.value = "";
    nameField.style.backgroundColor = "white";
    descField.style.backgroundColor = "white";
    emailField.style.backgroundColor = "white";
  }
  event.preventDefault();
});
