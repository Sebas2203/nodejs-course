const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (data, data2) => {
  console.log("received");
  console.log(data);
  console.log(data2);
});

//se le puede mandar cualquier cosa
// customEmitter.emit("response", "hello world");
// customEmitter.emit("response", 22);
// customEmitter.emit("response", [1, 2, 3]);
// customEmitter.emit("response", { name: "Sebastian" });

customEmitter.emit("response", "hello world", 22);
