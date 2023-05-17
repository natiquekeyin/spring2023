// Get the reference to the form...

var form = document.querySelector("#book-form");

// attach a submit event to the form here and run a function with it..
form.addEventListener("submit", function (evt) {
  console.log("Function working");

  evt.preventDefault();
});
