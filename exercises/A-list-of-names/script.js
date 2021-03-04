function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

  for (let person of arrayOfPeople) {
    let h1 = document.createElement("h1");
    let text = document.createTextNode(person.name);
    h1.appendChild(text);

    let h2 = document.createElement("h2");
    let text2 = document.createTextNode(person.job);
    h2.appendChild(text2);

    content.appendChild(h1);
    content.appendChild(h2);
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
