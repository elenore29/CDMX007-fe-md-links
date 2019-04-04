// const findMD = require('./search');
const transformedPath = require('./userPath');
const readMD = require('./reader');
const findUrls = require('./finder');
const validateUrl = require('./validate');

//Usando promesa para mostrar los links de los archivos
transformedPath(process.argv[2]).then((result) => {
  result.forEach(element => {
    readMD(element)
      .then(findUrls)
      .catch(err => (err))
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
