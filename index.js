const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

document
  .getElementById('book-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    AddBook();
  });

function AddBook() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
  console.log(myLibrary);
}

function displayBooks() {}

function changeStatus() {}
