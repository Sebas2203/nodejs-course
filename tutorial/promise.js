const { readFile } = require("fs");
const { promisify } = require("util");

const readFilePromie = promisify(readFile);

async function read() {
  try {
    const result = await readFilePromie("./data/first.txt", "utf-8");
    const result2 = await readFilePromie("./data/second.txt", "utf-8");
    console.log(result);
    console.log(result2);
  } catch (error) {
    console.log(error);
  }
}

read();

//instanciar el objeto de promise
// const getText = (pathFile) => {
//   return new Promise(function (resolve, reject) {
//     readFile(pathFile, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(data);
//     });
//   });
// };

// getText("./data/first.txt")
//   .then((result) => console.log(result))
//   .then(() => getText("./data/second.txt"))
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
