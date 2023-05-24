class Book {
  constructor(t, a, i) {
    this.title = t;
    this.author = a;
    this.isbn = i;
  }

  addBookToList(book) {
    var tr = document.createElement("tr");
    tr.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><td> <a href="#" class="delete">X</a></td>`;

    var tbody = document.querySelector("#tbody");
    tbody.appendChild(tr);
  }

  clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }

  showAlert(m, c) {
    var p = document.createElement("p");
    p.innerText = m;
    p.className = c;
    // no unique property of p...
    p.id = "box";

    document.querySelector("#popup").appendChild(p);

    setTimeout(function () {
      document.querySelector("#box").remove();
    }, 2000);
  }

  deleteBook(elemToDelete) {
    if (elemToDelete.className === "delete") {
      elemToDelete.parentElement.parentElement.remove();
      this.showAlert("Book successfully deleted", "success");
    } else {
      this.showAlert("Wrong area clicked! Click on X", "error");
    }
  }
}

// Get the reference to the form...

var form = document.querySelector("#book-form");

form.addEventListener("submit", function (evt) {
  // go and read the values in 3 text boxes above...
  var title = document.querySelector("#title").value;
  var author = document.querySelector("#author").value;
  var isbn = document.querySelector("#isbn").value;

  var book = new Book(title, author, isbn);
  if (book.title === "" || book.author === "" || book.isbn === "") {
    book.showAlert("No field should be empty", "error");
  } else {
    book.addBookToList(book);
    book.showAlert("Book Successfully added!", "success");
    book.clearFields();
  }

  evt.preventDefault();
});

document.querySelector("#book-list").addEventListener("click", function (evt) {
  var book = new Book();
  book.deleteBook(evt.target);
  evt.preventDefault();
});

// local Storage.. to store books permanently...
