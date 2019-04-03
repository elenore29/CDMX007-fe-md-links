const findMD = require('./search');
const readMD = require('./reader');
const dataToString = require('./lines'); 
const findUrls = require('./finder'); 

//Usando promesa para mostrar los links de los archivos
findMD().then((result)=>{
    result.forEach(element => {
        readMD(element).then(dataToString).then(findUrls);
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