function readingList(books) {
  // Write your code here...
  let content = document.querySelector("#content");
  let unorderedList = document.createElement("ul");

  for (let book of books) {
    let listItem = document.createElement("li");
    let paragraph = document.createElement("p");
    paragraph.innerHTML = book.title + " by " + book.author;
    paragraph.style.padding = "10px";
    let bookImage = document.createElement("img");
    bookImage.style.width = "260px";
    bookImage.style.height = "320px";
    bookImage.src = book.url;
    bookImage.style.margin = "10px";
    listItem.appendChild(paragraph);
    listItem.appendChild(bookImage);
    listItem.style.float = "left";
    listItem.style.margin = "10px";
    listItem.style.backgroundColor = book.alreadyRead ? "green" : "red";
    listItem.style.width = "370px";

    unorderedList.appendChild(listItem);
  }
  unorderedList.style.listStyleType = "none";
  content.appendChild(unorderedList);
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    url:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442460745l/840._SY475_.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    url: "https://images1.penguinrandomhouse.com/cover/9780307476708",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    url:
      "https://img.exclusivebooks.co.za/biblio/thumbnail.php?isbn=9780201616224&w=280&h=450&rc=1",
  },
];

readingList(books);
