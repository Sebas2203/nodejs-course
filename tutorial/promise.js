const { readFile } = require("fs");

//instanciar el objeto de promise
const getText = (pathFile) => {
  new Promise((resolve, reject) => {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

getText("./data/first.txt")
  .then((result) => console.log(result))
  .then(() => getText("./data/second.txt"))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
