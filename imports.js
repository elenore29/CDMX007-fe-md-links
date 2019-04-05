// const findMD = require('./search');
const userPath = require('./userPath');
const readMD = require('./readMD');
const findUrls = require('./findUrls');
const validateUrl = require('./validate');
const print = require('./print');

//Usando promesa para mostrar los links de los archivos
userPath(process.argv[2]).then((result) => {
  result.forEach(element => { 
    readMD(element)
      .then(findUrls)
      .then(validateUrl)
      .then(print)
      .catch(err => (err))
  });
});