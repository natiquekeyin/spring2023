// console.log(fetch("./data/sample.txt"));

document.querySelector("#btn1").addEventListener("click", getText);

function getText() {
  fetch("./data/sample.txt")
    .then((response) => {
      //   console.log(response.text());
      return response.text();
    })
    .then((data) => {
      document.querySelector("#output").innerHTML = `<strong>${data}</strong>`;
    });
}

// We want to read JSON file with multiple records... customers.json.....

document.querySelector("#btn2").addEventListener("click", getJSON);

function getJSON() {
  fetch("./data/customers.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let output = "";
      data.forEach((value) => {
        output += `<li>${value.id}</li><li>${value.name}</li><li>${value.email}</li>`;
      });
      document.querySelector("#output").innerHTML = output;
    });
}

// Get API data...

// document.querySelector("#btn3").addEventListener("click", getAPI);

// function getAPI() {
//   fetch("https://api.github.com/users")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       let output = "";
//       data.forEach((value) => {
//         output += `<div class="profile">
//         <h2>${value.login}</h2>
//         <img src = "${value.avatar_url}" alt="profilePic" class="pic"/> <br>
//         For more information:click on <a href="${value.html_url}">More..</a>
//         </div>`;
//       });
//       document.querySelector("#output").innerHTML = output;
//     });
// }

document.querySelector("#btn3").addEventListener("click", getAPI);

async function getAPI() {
  const response = await fetch("https://api.github.com/users");
  const data = await response.json();
  data.forEach((value) => console.log(value.login));
}
