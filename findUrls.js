const regEx = /\[((.+?))\]\((http|https|ftp|ftps).+?\)/g;
const textRegEX = /\[.+?\]/g;
const urlRegEx = /\((http|https|ftp|ftps).+?\)/g;
const urlArrObj = [];
const findUrls = async (data) => {
  const myPromise = new Promise((resolve, reject) => {
    const findUrl = data.match(regEx);
    for (let i in findUrl) {

      let text = findUrl[i].match(textRegEX)[0];
      let url = findUrl[i].match(urlRegEx)[0];
      urlArrObj.push({
        text2: text,
        url2: url
      })
    }
    resolve(urlArrObj)

  })
  const newArray = await myPromise
  return newArray
}

module.exports = findUrls;
