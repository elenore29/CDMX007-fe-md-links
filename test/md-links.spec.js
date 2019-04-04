const findMD = require('../search');

describe('findMD', () => {
  it('findMD should be a function', () => {
    expect(typeof findMD).toBe('function');
  });
  it('Should return an array with absolute paths of all .md files in the folder ./', async () => {
    const result = await findMD('../.');
    expect(result).toEqual(["/home/laboratoria164-am/Documentos/Laboratoria/CDMX007-fe-md-links/README.md", "/home/laboratoria164-am/Documentos/Laboratoria/CDMX007-fe-md-links/README2.md"]);
  });
})

const transformedPath = require('../userPath');

describe('transformedPath should be a function', () => {
  it('transformedPath should be function', () => {
    expect(typeof transformedPath).toBe('function');
  });
  it('Should return an array with an absolute path', async () => {
    const newPromise = await transformedPath('../README2.md');
    expect(newPromise).toEqual(["/home/laboratoria164-am/Documentos/Laboratoria/README2.md"]);
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
    expect(newPromise).toEqual("#Hola!\nEn este archivo...\n(https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)");
  });
})

const findUrls = require('../findUrls');
describe('findUrls', () => {
  it('readMD should be a function', () => {
    expect(typeof findUrls).toBe('function');
  });
  it('Should return an array with the links on the ./README2.md file', async () => {
    const data = "#Hola!\nEn este archivo...\n(https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)"
    const newPromise = await findUrls(data);
    expect(newPromise).toEqual(["https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions"]);
  });
})


const validateUrl = require('../validate');
describe('validateUrl', () => {
  it('validateUrl should be a function', () => {
    expect(typeof validateUrl).toBe('function');
  });
 it('Should return the link with its status', async () => {
    const findUrl = ["https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions"]
    const loquesea = await validateUrl(findUrl);
    expect(loquesea).toEqual(["status 200 https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions"]);
  });
 
})


