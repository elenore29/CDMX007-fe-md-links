const findMD = require('./search');
const readMD = require('./reader');
const dataToString = require('./lines'); 
const findUrls = require('./finder'); 
const validateUrl = require('./get'); 
//Usando promesa para mostrar los links de los archivos
findMD().then((result)=>{
    result.forEach(element => {
        readMD(element)
        .then(dataToString)
        .catch(err => (err))
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