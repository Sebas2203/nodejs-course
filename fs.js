const fs = require("fs");

//Sync = sincrono (codigo que se ejecuta despues de que se termine una tarea)
//leer un archivo
// const first = fs.readFileSync("./data/first.txt", "utf-8");
// const second = fs.readFileSync("./data/second.txt");

// console.log(first);
// console.log(second.toString());

// //crear un archivo
// fs.writeFileSync("./data/third.txt", "Hello from Node.js");

// const title = "Node.js 4 archive";
// fs.writeFileSync("./data/fourth.txt", title, {
//   flag: "a", //append
// });

//Async = asincrono (podemos ir ejecutando codigo mientras se ejecuta una tarea)
//consume mejor los recursos del cpu

const fs = require("fs");

fs.readFile("./data/first.txt", "utf-8", (error, data) => {
  // La función se llama callback
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);

  fs.readFile("./data/second.txt", "utf-8", (error, data) => {
    // La función se llama callback
    if (error) {
      console.log(error);
      return;
    }
    console.log(data);

    // Crear un archivo
    fs.writeFile("./data/newFile.txt", "archivo async desde fs", (error) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log("Archivo creado");
    });
  });
});
