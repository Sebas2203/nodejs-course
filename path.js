const path = require("path");

const filePath = "/home/user/index.js";
console.log(filePath);
console.log(path.basename(filePath)); // nombre del archivo
console.log(path.dirname(filePath)); // directorio del archivo
console.log(path.parse(filePath)); // parsea el archivo
console.log(path.resolve("dist")); // resuelve el archivo
