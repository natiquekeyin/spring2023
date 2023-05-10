// var myTitle = document.title;

// // console.log("The title of the document is " + myTitle);

// console.log(`The title of the document is ${myTitle}`);

// var x = document.getElementById("p2");

// console.log(`The element with id p2 is ${x}`);

var div = document.createElement("div");
var text = document.createTextNode("Hi I am a div");

div.appendChild(text);
document.body.appendChild(div);
