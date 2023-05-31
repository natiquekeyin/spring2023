// define the promise
let p = new Promise((resolve, reject) => {
  let a = 7 + 4;

  if (a == 6) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

// call/use the promise..

p.then((message) => {
  console.log("This is then area " + message);
}).catch((message) => {
  console.log("This is catch area.." + message);
});
