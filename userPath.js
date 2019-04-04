const path = require('path');
const fileArray = [];

const userPath = (file) => {

  const newPromise = new Promise((resolve, reject, err) => {
    if (err) {
      console.log('Error')
      reject(err);
    } else {
      const file2 = path.resolve(file);
      fileArray.push(file2);
      resolve(fileArray)
    }
    })
    
  return newPromise
}

module.exports = userPath;
