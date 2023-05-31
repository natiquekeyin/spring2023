// // define the promise
// let p = new Promise((resolve, reject) => {
//   let a = 7 + 4;

//   if (a == 6) {
//     resolve("Success");
//   } else {
//     reject("Failed");
//   }
// });

// // call/use the promise..

// p.then((message) => {
//   console.log("This is then area " + message);
// }).catch((message) => {
//   console.log("This is catch area.." + message);
// });

let posts = [
  { title: "Post1", author: "Author1", body: "This is body of post1" },
  { title: "Post2", author: "Author2", body: "This is body of post2" },
  { title: "Post3", author: "Author3", body: "This is body of post3" },
];

// function createPosts(post, callback) {
//   setTimeout(() => {
//     posts.push(post);
//     callback(); //in this step getPosts() is called...
//   }, 3000);
// }

// function getPosts() {
//   setTimeout(() => {
//     console.log(posts);
//   }, 1000);
// }

// createPosts(
//   { title: "post4", author: "author4", body: "This is body of post4" },
//   getPosts
// ); //taking 3 seconds...

// getPosts(); //runs in 1 second

function createPosts(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      resolve();
    }, 3000);
  });
}

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `Title:${post.title}<br>Author:${post.author}<br>Body:${post.body}----<br>`;
    });

    document.querySelector("#output").innerHTML = output;
  }, 1000);
}

createPosts({
  title: "Post4",
  author: "Author 4",
  body: "this is body of post4",
}).then(getPosts);
