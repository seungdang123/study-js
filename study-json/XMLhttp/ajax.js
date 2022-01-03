// 1. Use XMLhttpRequest to interact with server
const ajax = new XMLHttpRequest();

// 2. Set a request URL
ajax.open("GET", "https://api.github.com/users/seungdang123", false);

// 3. Initiates the request
ajax.send();

// string to object
const data = JSON.parse(ajax.response);

const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
const h3 = document.createElement("h3");
const p = document.createElement("p");
h1.innerHTML = `Hello! ${data.login}`;
h2.innerHTML = data.location;
h3.innerHTML = `Skills: ${data.bio}`;
p.innerHTML = `Created at ${new Date(data.created_at)} and updated ${new Date(
  data.updated_at
)}`;

const arr = [h1, h2, h3, p];

arr.forEach((value) => document.querySelector(".container").appendChild(value));
