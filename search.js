const fs = require('fs');
const path = require('path');
//Función  para encontrar archivos de forma asincróna
const findMD = (userPath) => {
      const newArray = [];
      return new Promise((resolve, reject) => {
        const isDirectory = fs.lstatSync(userPath).isDirectory();

        if (isDirectory) {
          path2 = path.resolve(userPath);
          fs.readdir(userPath, (err, data) => {
            if (err) {
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
        } else if (userPath.match(/.md$/gm)) {
          const file2 = path.resolve(userPath);
          newArray.push(file2);
          resolve(newArray)
        }
      }); 

      };

      module.exports = findMD;