const axios = require("axios");
function main() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(async res => {
      const json = await res.json();
      console.log(json);
    });
}


async function main1() {
  const res = await axios({
    url: "https://jsonplaceholder.typicode.com/todos/1",
    method: "GET",
    headers: {
      Authorization: "Bearer 23123",
    },
    data: {
      username: "kirat"
    }
  });
  console.log(response)
}
main();
main1();