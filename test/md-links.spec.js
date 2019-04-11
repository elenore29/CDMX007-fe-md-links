const findMD = require('../search');
describe('findMD', () => {
  it('findMD should be a function', () => {
    expect(typeof findMD).toBe('function');
  });
  it('Should return an array with the absolute paths of all .md files in a folder if the usersPath is a folder', async () => {
    const userPath = './'
    const result = await findMD(userPath);
    expect(result).toEqual(['/home/laboratoria164-am/Documentos/Laboratoria/CDMX007-fe-md-links/README.md', '/home/laboratoria164-am/Documentos/Laboratoria/CDMX007-fe-md-links/README2.md'])
  });
  it('Should return an array with the absolute path of my .md file', async () => {
    const userPath = './README.md'
    const result = await findMD(userPath);
    expect(result).toEqual(['/home/laboratoria164-am/Documentos/Laboratoria/CDMX007-fe-md-links/README.md'])
  });
})

const readMD = require('../readMD');
describe('readMD', () => {
  it('readMD should be a function', () => {
    expect(typeof readMD).toBe('function');
  });
  it('Should return a string with the content of the ./README2.md file', async () => {
    const path = "/home/laboratoria164-am/Documentos/Laboratoria/CDMX007-fe-md-links/README2.md"
    const newPromise = await readMD(path);
    expect(newPromise).toEqual("#Hola!\nEn este archivo...\n[titulo](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)");
  });
})

const findUrls = require('../findUrls');
describe('findUrls', () => {
  it('readMD should be a function', () => {
    expect(typeof findUrls).toBe('function');
  });
  it('Should return an array with the links on the ./README2.md file', async () => {
    const data = "#Hola!\nEn este archivo...\n[titulo](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)"
    const newPromise = await findUrls(data);
    expect(newPromise).toEqual([{
      text2: '[titulo]',
      url2: '(https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)'
    }]);
  });
})

const validateUrl = require('../statusCode');
describe('validateUrl', () => {
  it('validateUrl should be a function', () => {
    expect(typeof validateUrl).toBe('function');
  });
  it('Should return the link with its status', async () => {
    const findUrl = [{
      text2: '[titulo]',
      url2: '(https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)'
    }]
    const response = await validateUrl(findUrl);
    expect(response).toEqual([{
      "link": 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
      "status": 200,
      "text2": "titulo"
    }]);
  });
  it('Should return the link with its status', async () => {
    const findUrl = [{
      text2: '[titulo]',
      url2: '(https://otra-cosa.net/algun-doc.html)'
    }]
    const response = await validateUrl(findUrl);
    expect(response).toEqual([{
      "link": 'https://otra-cosa.net/algun-doc.html',
      "status": undefined,
      "text2": "titulo"
    }]);
  });

  it('Should return the link with its status', async () => {
    const findUrl = [{
      text2: '[titulo]',
      url2: '(http://algo.com/2/3/)'}]
    const response = await validateUrl(findUrl);
    expect(response).toEqual([{
      "link": "http://algo.com/2/3/",
      "status": 301, 
      "text2": "titulo"
    }]);
  });
  it('Should return the link with its status', async () => {
    const findUrl = [{
      text2: '[titulo]',
      url2: '(http://otra-cosa.net/algun-doc.html)'}]
    const response = await validateUrl(findUrl);
    expect(response).toEqual([{
      "link": "http://otra-cosa.net/algun-doc.html",
      "status": undefined, 
      "text2": "titulo"
    }]);
  });
})
