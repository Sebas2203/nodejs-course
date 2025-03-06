const fs = require("fs");

//leer un archivo
const first = fs.readFileSync("./data/first.txt", "utf-8");
console.log(first);
