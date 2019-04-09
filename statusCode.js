const https = require('https');
const http = require('http');

const validateUrl = async (findUrl) => {
  const myPromise = new Promise((resolve) => {
    const validateArr = [];
    let counter = 0;

    findUrl.forEach(element => {
      if (element.match(/(https:\/\/[^\s]+)/g)) {
        https.get(element, (res) => {
          validateArr.push({status: res.statusCode, link: element})
          counter += 1;
          if (findUrl.length === counter) {
            resolve(validateArr);
          }
        }).on('error', (res) => {
          validateArr.push({status: res.statusCode, link: element})
          counter += 1;
          if (findUrl.length === counter) {
            resolve(validateArr);
          }
        });
      } else {
        http.get(element, (res) => {
          validateArr.push({status: res.statusCode, link: element})
          counter += 1;
          if (findUrl.length === counter) {
            resolve(validateArr);
          }
        }).on('error', (res) => {
          validateArr.push({status: res.statusCode, link: element})
          counter += 1;
          if (findUrl.length === counter) {
            resolve(validateArr);
          }
        });
      }
    });
  })
  const result = await myPromise;
  return result
}

module.exports = validateUrl;
