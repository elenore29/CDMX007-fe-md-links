const path = require('path'); 
const file = process.argv[2]; 
const fileArray = []; 

const changePath = () => {
    const newPromise = new Promise((resolve, reject) => {

    const file2 = path.resolve(file); 
    fileArray.push(file2);
    resolve(fileArray)
  })
  return newPromise
}

  module.exports = changePath;