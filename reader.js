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

