const fs = require('fs');
//Función para leer los archivos pasandole el resultado de la función de findMD
const readMD = (path) => {
  const newPromise = new Promise((resolve, reject) => {
    fs.readFile(`${path}`, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
  return newPromise;
}

module.exports = readMD;

