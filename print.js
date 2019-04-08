var colors = require('colors');

const print = (result) => {
result.forEach(element => {
    if (element.status >= 400){
        console.log(colors.red (element.status + ' ' + element.link + ' fail' ))
    } else {
        console.log (colors.blue (element.status + ' ' + element.link + ' ok'))
    } 
})
}

module.exports = print;