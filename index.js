const myLibrary = [];

function Book(title, author, pages, readStatus = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function updatereadStatus(index) {
  if (myLibrary[index].readStatus === true) {
    myLibrary[index].readStatus = false;
  } else {
    myLibrary[index].readStatus = true;
  }
  displayBooks(myLibrary);
}

document
  .getElementById("book-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    AddBook();
  });

function AddBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
  displayBooks(myLibrary);
  clearFields();
}

function clearFields() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
}

function displayBooks(book) {
  const renderHook = document.getElementById("table");
  renderHook.innerHTML = '';
  book.forEach(function (b, index) {
    const tr = document.createElement("tr");
    tr.className = "table-info";
    tr.innerHTML = `
  <td>${b.title}</td>
  <td>${b.author}</td>
  <td>${b.pages}</td>
  <td><button class="btn btn-warning " onclick="updatereadStatus(${index});">${
      b.readStatus ? "Unread" : "Read"
    }</button></td>

  <td><button class="btn btn-danger" onclick="removeBook(${index});">Remove</button></td>
  `;
    renderHook.append(tr);
  });
}

function removeBook(book) {
  delete myLibrary[book];
  displayBooks(myLibrary);
}
