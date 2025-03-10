const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("welcome to the server");
    return res.end();
  }
  if (req.url === "/about") {
    //blocking code = bloquea el hilo de ejecucion de node
    // for (let i = 0; i < 10000; i++) {
    //   console.log(Math.random() * i);
    // }
    return res.end("About page");
  }
  res.end("Not found");
});

server.listen(3000);
console.log("Server on port 3000");
