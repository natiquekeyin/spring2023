// 1.When user clicks on tree picture, the new picture should appear

// a) get reference to the picture area??

var pic = document.querySelector("#tree");

// b) attach a click event with thre picture area!

pic.addEventListener("click", function (evt) {
  //   pic.src = "./images/abc.jpg";

  //   let's make a fucntion nextUrl() that will bring different url on everyclick andh shows a new picture
  pic.src = nextUrl();

  evt.stopPropagation();
});

// the nextUrl function here..

var currentUrl = 0;
function nextUrl() {
  if (currentUrl === trees.length - 1) {
    currentUrl = 0;
  }
  currentUrl++;
  return trees[currentUrl];
}

// get reference to the body of the document

var body = document.body;

body.addEventListener("click", function (evt) {
  //   console.log(evt.clientX);
  //to show X and Y coordinates on the webpage at x and y respectively...
  // get reference to xPos in the script...
  var x = document.querySelector("#xPos");
  x.innerText = evt.clientX;
  var y = document.querySelector("#yPos");
  y.innerHTML = "<strong>" + evt.clientY + "</strong>";
});
