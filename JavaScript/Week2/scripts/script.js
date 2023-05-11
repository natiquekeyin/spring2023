// var myTitle = document.title;

// // console.log("The title of the document is " + myTitle);

// console.log(`The title of the document is ${myTitle}`);

// var x = document.getElementById("p2");

// console.log(`The element with id p2 is ${x}`);

// var div = document.createElement("div");
// var text = document.createTextNode("Hi I am a div");

// div.appendChild(text);
// document.body.appendChild(div);

// var div = document.createElement("div");
// div.innerText = "I am a new <strong>DIV</strong> with <em>innerText</em>";
// div.id = "new";
// div.className = "demo";

// document.body.appendChild(div);

// var div1 = document.createElement("div");
// div1.innerHTML = "I am a new <strong>DIV</strong> with <em>innerHTML</em>";
// document.body.appendChild(div1);

// var pic = document.createElement("img");
// pic.src = "./images/abc.jpg";
// pic.alt = "Some random picture";
// pic.width = "300";
// pic.id = "pic1";
// pic.className = "picture";

// document.body.appendChild(pic);

// var body = document.body; //get reference to the body of the document...

// // when someone clicks on the body of the document, run following function...

// // body.onclick = function () {
// //   var pic = document.createElement("img");
// //   pic.src = "./images/abc.jpg";
// //   pic.alt = "Some random picture";
// //   pic.width = "300";
// //   pic.id = "pic1";
// //   pic.className = "picture";

// //   document.body.appendChild(pic);
// // };

// body.addEventListener("click", function () {
//   var pic = document.createElement("img");
//   pic.src = "./images/abc.jpg";
//   pic.alt = "Some random picture";
//   pic.width = "300";
//   pic.id = "pic1";
//   pic.className = "picture";

//   document.body.appendChild(pic);
// });

// body.onclick = function() { }
// body.addEventListener("click",function(){});

// var x = document.querySelector("#p2");

// x.addEventListener("click", function () {
//   //   var div = document.createElement("div");
//   //   div.innerHTML =
//   //     "<h1>New DIv</h1><p>Created wwhen you clicked on second item</p>";

//   //   document.body.appendChild(div);

//   var pic = document.createElement("img");
//   pic.src = "./images/abc.jpg";
//   pic.alt = "Some random picture";
//   pic.width = "300";
//   pic.id = "pic1";
//   pic.className = "picture";

//   document.body.appendChild(pic);
// });

var x = document.querySelector("#p2");

x.addEventListener("click", someFunc);

function someFunc() {
  var pic = document.createElement("img");
  pic.src = "./images/abc.jpg";
  pic.alt = "Some random picture";
  pic.width = "300";
  pic.id = "pic1";
  pic.className = "picture";

  document.body.appendChild(pic);
}
