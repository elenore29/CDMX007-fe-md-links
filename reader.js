const fs = require('fs');
//Función para leer los archivos pasandole el resultado de la función de findMD
const readMD = (path) => {
  const newPromise = new Promise((resolve, reject) => {
    fs.readFile(`./${path}`, (err, data) => {
      if (err) {
        console.log(err)
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
  return newPromise;
}

module.exports = readMD;
