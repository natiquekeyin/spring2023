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
