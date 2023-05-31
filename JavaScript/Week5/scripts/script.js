document.querySelector("#btn1").addEventListener("click", loadData);

function loadData() {
  // 1. Create an XHR object...

  const xhr = new XMLHttpRequest();

  //   2. Configure the request...

  xhr.open("GET", "./data/sample.txt");

  //   3. Define what to do when data is received...successfully...

  xhr.onload = function () {
    if (this.status === 200) {
      //   document.querySelector("#output").innerText = this.responseText;

      document.querySelector(
        "#output"
      ).innerHTML = `<strong>${this.responseText}</strong>`;
    }
  };

  //   4. Initiate the request....

  xhr.send();
}

document.querySelector("#btn2").addEventListener("click", loadJSON);

function loadJSON() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "./data/customer.json");

  xhr.onload = function () {
    if (this.status === 200) {
      //   console.log(this.responseText);

      var customer = JSON.parse(this.responseText);

      document.querySelector(
        "#output"
      ).innerHTML = `Name: <strong> ${customer.name}</strong> <br>Email: ${customer.email}`;
    }
  };

  xhr.send();
}

document.querySelector("#btn3").addEventListener("click", loadJSONS);

function loadJSONS() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "./data/customers.json");

  xhr.onload = function () {
    if (this.status === 200) {
      var customers = JSON.parse(this.responseText);

      var output = "";
      customers.forEach((customer) => {
        output += `<ul>
        <li>ID:${customer.id}</li><li>Name:${customer.name}</li><li>Email:${customer.email}</li></ul>`;
      });

      document.querySelector("#output").innerHTML = output;
    }
  };

  xhr.send();
}

// Get API Data...

document.querySelector("#btn4").addEventListener("click", loadAPI);

function loadAPI() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://reqres.in/api/users");

  xhr.onload = function () {
    if (this.status === 200) {
      var users = JSON.parse(this.responseText);

      console.log(users);
      var output = "";
      users.data.forEach((user) => {
        output += `<div class="profile">

       <img src = "${user.avatar}" alt="pic"  class="profile-pic"/> <br>
        ID:<a href="#"> ${user.first_name + user.last_name}</a> <br>
        Email:${user.email} <br>
        
        </div>`;
      });

      document.querySelector("#output").innerHTML = output;
    }
  };

  xhr.send();
}
