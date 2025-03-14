// const { writeFile } = require("fs/promises");

// const createBigFile = async () => {
//   await writeFile("./data/bigfile.txt", "Hello World".repeat(10000));
// };

// createBigFile();

const { ChildProcess } = require("child_process");
const { createReadStream } = require("fs");

const stream = createReadStream("./data/bigfile.txt", {
  encoding: "utf-8",
});

stream.on("data", (chunk) => {
  console.log(chunk);
});

stream.on("end", () => {
  console.log("finish");
});

stream.on("error", (error) => {
  console.log(error);
});
