const https = require('https');
const http = require('http');

const validateUrl = async (findUrl) => {
  const myPromise = new Promise((resolve) => {
    const validateArr = [];
    let counter = 0;

    findUrl.forEach(element => {
      const url = element.url2.slice(1, -1);
      const text = element.text2.slice(1, -1); 
      if (url.match(/(https:\/\/[^\s]+)/g)) {
        https.get(url, (res) => {
          validateArr.push({text2: text, status: res.statusCode, link: url})
          counter += 1;
          if (findUrl.length === counter) {
            resolve(validateArr);
          }
        }).on('error', (res) => {
          validateArr.push({text2: text, status: res.statusCode, link: url})
          counter += 1;
          if (findUrl.length === counter) {
            resolve(validateArr);
          }
        });
      } else {
        http.get(url, (res) => {
          validateArr.push({text2: text, status: res.statusCode, link: url})
          counter += 1;
          if (findUrl.length === counter) {
            resolve(validateArr);
          }
        }).on('error', (res) => {
          validateArr.push({text2: text, status: res.statusCode, link: url})
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
