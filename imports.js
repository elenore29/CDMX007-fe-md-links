const findMD = require('./search');
const readMD = require('./readMD');
const findUrls = require('./findUrls');
const statusCode = require('./statusCode');
const validate = require('./validate');
const stats = require('./stats');
const path1 = process.argv[2];
var colors = require('colors');

if (process.argv[3] == '--validate'  && process.argv[4] == '--stats') {
  findMD(path1).then((result) => {
    result.forEach(element => {
      readMD(element)
        .then(findUrls)
        .then(statusCode)
        .then(validate)
        .then(stats)
        .catch(err => (err))
    });
  });
 } 
else if (process.argv[3] == '--validate') {
  findMD(path1).then((result) => {
    result.forEach(element => {
      readMD(element)
        .then(findUrls)
        .then(statusCode)
        .then(validate)
        .catch(err => (err))
    });
  });
} else if (process.argv[3] == '--stats'){
  console.log('ya')
}
else {
  findMD(path1).then((result) => {
    result.forEach(element => {
      readMD(element)
        .then(findUrls)
        .then((data) => {
          statusCode(data)
          console.log(colors.green(data))
        })
        .catch(err => (err))
    })
  })
}
