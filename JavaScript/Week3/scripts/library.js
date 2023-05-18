// Get the reference to the form...

var form = document.querySelector("#book-form");

// attach a submit event to the form here and run a function with it..
form.addEventListener("submit", function (evt) {
  // go and read the values in 3 text boxes above...
  var title = document.querySelector("#title").value;
  var author = document.querySelector("#author").value;
  var isbn = document.querySelector("#isbn").value;

  // pass the above values to a fucntion addBookToList() that will put them in the table below
  addBookToList(title, author, isbn);

  evt.preventDefault();
});

// the following function will receive 3 parameters and create a new row in the table below and put these values in the row...
function addBookToList(t, a, i) {
  if (t === "" || a === "" || i === "") {
    showAlert("No field should be empty", "error");
  } else {
    var tr = document.createElement("tr");
    tr.innerHTML = `<td>${t}</td><td>${a}</td><td>${i}</td><td>X</td>`;

    var tbody = document.querySelector("#tbody");
    tbody.appendChild(tr);

    showAlert("Book succcessfully added", "success");

    clearFields();
  }
}

function clearFields() {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#isbn").value = "";
}

function showAlert(m, c) {
  var p = document.createElement("p");
  p.innerText = m;
  p.className = c;

  document.querySelector("#popup").appendChild(p);
}
