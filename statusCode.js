const https = require('https');
const http = require('http');

const validateUrl = async (findUrl) => {
  const myPromise = new Promise((resolve, reject) => {
    const validateArr = [];
    let listo = 0;

    findUrl.forEach(element => {
      if (element.match(/(https:\/\/[^\s]+)/g)) {
        https.get(element, (res) => {
          validateArr.push({status: res.statusCode, link: element})
          listo += 1;
          if (findUrl.length === listo) {
            resolve(validateArr);
          }
        }).on('error', (res) => {
          validateArr.push({status: res.statusCode, link: element})
          listo += 1;
          if (findUrl.length === listo) {
            resolve(validateArr);
          }
        });
      } else {
        http.get(element, (res) => {
          validateArr.push({status: res.statusCode, link: element})
          listo += 1;
          if (findUrl.length === listo) {
            resolve(validateArr);
          }
        }).on('error', (res) => {
          validateArr.push({status: res.statusCode, link: element})
          listo += 1;
          if (findUrl.length === listo) {
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
