const findMD = require('./search');
const readMD = require('./reader');
const countLines = require('./lines'); 

//Usando promesa para mostrar el contenido de los archivos
findMD().then((result)=>{
    result.forEach(element => {
        readMD(element).then(countLines);
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