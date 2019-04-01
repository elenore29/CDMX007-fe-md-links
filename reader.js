//Función  para leer archivos de forma asincrona
const readMD = ()=> {
    const fs = require('fs'); 
    fs.readFile('./README.md', (err, data) => { 
        if (err){
        console.log('Error')
        } 
        else {
            const hola = data.toString();
            console.log(hola); 
            const salto = ('\n')  
            const split1 = hola.split(salto).length;
            console.log(split1); 
        }
     })
}
module.exports = readMD(); 

// //Función  para leer archivos de forma asincrona

// const readMD = async (direccion)=> {
//     const direccion = require('./search'); 


//     const fs = require('fs'); 
//     let newPromise = new Promise((resolve, reject) => {
//     fs.readFile(direccion, (err, data) => { 
//         if (err){
//         console.log('Error')
//         reject();
//         } 
//         else {
//             const hola = data.toString();
//             // console.log(hola); 
//             const salto = ('\n')  
//             const split1 = hola.split(salto).length;
//             // console.log(split1); 
//         }
//         resolve();
//      })
// })
// const result = await newPromise;
// return result
// }

// readMD().then(arr => console.log(arr))

// module.exports = readMD(); 