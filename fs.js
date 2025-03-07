const fs = require("fs");

//leer un archivo
const first = fs.readFileSync("./data/first.txt", "utf-8");
const second = fs.readFileSync("./data/second.txt");

console.log(first);
console.log(second.toString());

//crear un archivo
fs.writeFileSync("./data/third.txt", "Hello from Node.js");

const title = "Node.js 4 archive";
fs.writeFileSync("./data/fourth.txt", title, {
  flag: "a", //append
});
