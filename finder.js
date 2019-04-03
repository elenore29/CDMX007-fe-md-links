const findUrls = (data) => {
    const findUrl = data.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi);
    console.log(findUrl)
}

module.exports = findUrls;