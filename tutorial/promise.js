const { readFile } = require("fs");

//instanciar el objeto de promise
const getText = (pathFile) => {
  return new Promise(function (resolve, reject) {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

// getText("./data/first.txt")
//   .then((result) => console.log(result))
//   .then(() => getText("./data/second.txt"))
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

async function read() {
  try {
    const result = await getText("./data/first.txt");
    const result2 = await getText("./data/second.txt");
    console.log(result);
    console.log(result2);
  } catch (error) {
    console.log(error);
  }
}

read();
