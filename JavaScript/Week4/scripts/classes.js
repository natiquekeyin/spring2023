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

  // static abc() {
  //   console.log("I am static function inside class..");
  // }
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
    Store.addBook(book);
    book.clearFields();
  }

  evt.preventDefault();
});

document.querySelector("#book-list").addEventListener("click", function (evt) {
  var book = new Book();
  //Book.abc(); //NOT object level .. a class level .. DIRECTLY with the class name...
  book.deleteBook(evt.target);
  Store.removeBook(evt.target.parentElement.previousElementSibling.innerText);
  evt.preventDefault();
});

// May 29,2023

// local Storage.. to store books permanently...
// browser's memory..we use to store objects in it and retrieve them....
// This Store class will i)Storing books in local storage...ii)Retrieving the books from LS. iii)Deleting the books for LS.
class Store {
  // getBooks will retrieve the books from LS...
  static getBooks() {
    var books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
      // stringify()
    }

    return books;
  }

  static addBook(book) {
    // bring the already stored books from memory and save this array in books variable...
    var books = Store.getBooks();
    // Push the passed book to this funtion into the already available books...
    books.push(book);

    // update the local Storage...add this created books array to the memory...

    localStorage.setItem("books", JSON.stringify(books));
  }

  static displayBooks() {
    var books = Store.getBooks();

    books.forEach((book) => {
      var objBook = new Book();

      objBook.addBookToList(book);
    });
  }

  static removeBook(isbn) {
    var books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    // update the local storage with new array with one element deleted...
    localStorage.setItem("books", JSON.stringify(books));
  }
}

document.addEventListener("DOMContentLoaded", Store.displayBooks);
