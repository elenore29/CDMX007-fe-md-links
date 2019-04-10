var colors = require('colors');
let counterFail = 0;

const validateUrls = async (result) => {
  const myPromise = new Promise((resolve) => {

    result.forEach(element => {
      if (element.status >= 400) {
        console.log(colors.red(element.status + ' ' + element.link + ' fail'))
        counterFail++;
      } else {
        console.log(colors.blue(element.status + ' ' + element.link + ' ok'))
      }

    })
    resolve(counterFail)
    const total = result.length
    console.log('Total: ' + total)
})
  const counterResult = await myPromise;
  return counterResult
}

module.exports = validateUrls;
