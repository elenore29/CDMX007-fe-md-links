const validateUrl = (findUrl) => {
  findUrl.forEach(element => {

    if (element.match(/(https:\/\/[^\s]+)/g)) {
      const https = require('https');
      https.get(element, (res) => {
        console.log('status', res.statusCode, element)
      }).on('error', (e) => {
        console.error(e);
      })
    } else if (element.match(/(http:\/\/[^\s]+)/g)) {
      const http = require('http');
      http.get(element, (res) => {
        console.log('status', res.statusCode, element)
      }).on('error', (e) => {
        console.error(e);
      })
    }
  });
}

module.exports = validateUrl;
