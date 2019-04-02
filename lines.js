const countLines = (data) => {
  const arrayToString = data.toString();
  console.log(arrayToString);
  const newLine = ('\n')
  const splitArray = arrayToString.split(newLine).length;
  console.log(splitArray);
}

module.exports = countLines;
