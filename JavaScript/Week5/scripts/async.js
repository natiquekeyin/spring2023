// function myFunction() {
//   return "Hello";
// }

// console.log(myFunction());

// async function myFunc() {
//   return "Hello";
// }

// myFunc().then((res) => {
//   console.log(res);
// });

async function myFunc() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 1000);
  });

  const response = await promise;

  return response;
}

console.log(myFunc().then((res) => console.log(res)));

// async function fetchData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await response.json();
//   console.log(data);
// }
// fetchData();
