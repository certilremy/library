const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}
Book.prototype.readStatus = function readStatus() {read = false}

function changeStatus(book) {
        

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
  myLibrary.forEach(function(book){
    displayBooks(book);
  })
  clearFields();
}
function clearFields() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
}
function displayBooks(book) {
  const renderHook = document.getElementById('table');
  const tr = document.createElement('tr');
  tr.className = 'table-info';
  tr.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.pages}</td>
  <td><button class="btn btn-warning">Read</button></td>
  <td><button class="btn btn-danger">Remove</button></td>
  `;
  renderHook.append(tr);
}
