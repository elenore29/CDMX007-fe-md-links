// const findMD = require('./search');
const userPath = require('./userPath');
const readMD = require('./readMD');
const findUrls = require('./findUrls');
const validateUrl = require('./validate');

//Usando promesa para mostrar los links de los archivos
userPath(process.argv[2]).then((result) => {
  result.forEach(element => { 
    readMD(element)
      .then(findUrls)
      .then(validateUrl)
      .catch(err => (err))
  });
});

// //Usando async y await
// const mdLinks = async () => {
//     const files = await findMD();
//     files.forEach(async element => {
//         const fileContent = await readMD(element);
//         show(fileContent);
//     })
//  };
// console.log(mdLinks);
// mdLinks();
