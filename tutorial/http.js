const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);

  //cambiar ruta inicial
  if (req.url === "/") {
    res.write("Welcome to the Server"); //write a response to the client
    return res.end(); //end the response
  }

  //visitar diferentes paginas
  if (req.url === "/about") {
    res.write("About at"); //write a response to the client
    return res.end(); //end the response
  }

  //si visita un lugar que no existe
  res.write(`
        <h1>Not Found</h1>
        <p>page not found </p>
        <a href='/'>Home Page</a>
    `); //write a response to the client
  res.end(); //end the response
});

server.listen(3000); //the server object listens on port 8080

console.log("Server running on port 3000");
