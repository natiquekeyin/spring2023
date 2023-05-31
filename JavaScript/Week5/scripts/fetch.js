// console.log(fetch("./data/sample.txt"));

fetch("./data/sample.txt")
  .then((response) => {
    //   console.log(response.text());
    return response.text();
  })
  .then((data) => {
    console.log(data);
  });
