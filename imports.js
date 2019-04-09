// const findMD = require('./search');
const userPath = require('./userPath');
const readMD = require('./readMD');
const findUrls = require('./findUrls');
const statusCode = require('./statusCode');
const validate = require('./validate');
const stats = require('./stats');
const path1 = process.argv[2];
var colors = require('colors');

if (process.argv[3] == '--validate'  && process.argv[4] == '--stats') {
  userPath(path1).then((result) => {
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
  userPath(path1).then((result) => {
    result.forEach(element => {
      readMD(element)
        .then(findUrls)
        .then(statusCode)
        .then(validate)
        .catch(err => (err))
    });
  });
} else if (process.argv[3] == '--validate'){
  console.log('ya')
}
else {
  userPath(path1).then((result) => {
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
