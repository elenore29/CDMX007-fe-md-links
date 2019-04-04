const fs = require('fs');
const path = require('path'); 
//Función  para encontrar archivos de forma asincróna
const findMD = async () => {
  const newArray = [];
  const newPromise = new Promise((resolve, reject) => {
    fs.readdir('./', (err, data) => {
      if (err) {
        console.log('Error')
        reject(err);
      } else {
        const allFiles = data;
        for (let i = 0; i < allFiles.length; i++) {

          if (allFiles[i].match(/.md$/gm)) {
          const path2 = path.resolve(allFiles[i])
            newArray.push(path2);
          }
        }
        resolve(newArray);
      };
    });
  });
  const result = await newPromise;
  return result 
};

module.exports = findMD;
