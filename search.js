//Función  para encontrar archivos de forma asincrona
const findMD = async () => {
  const fs = require('fs');
  const newArray = [];
  let newPromise = new Promise((resolve, reject) => {
    fs.readdir('./', (err, data) => {
      if (err) {
        console.log('Error')
        reject();
      } else {
        const allFiles = data;
        for (let i = 0; i < allFiles.length; i++) {

          if (allFiles[i].match(/.md$/gm)) {
            newArray.push(allFiles[i]);
          }
        }
        resolve(newArray);
      };
    });
  });

  const result = await newPromise;
  return result

};

findMD().then(arr => console.log(arr))


module.exports = findMD();
