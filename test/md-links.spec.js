const { existPath,
  isAbsolute,
  validatePath,
  readDirectory,
  extension,
  fileContent,
  joinPaths, checkPath, getLinks } = require('../index');

/* **********************si el path existe********************* */
describe ('existPath', () => {
  it('should be a function', () => 
  {
    expect(typeof(existPath)).toBe('function');
  });
  it('should return true if the path exists', () => {
    expect(existPath('Directory\\file1\\readme2.md')).toBe(true);
  });
  it('should return false if does not path exists ', () => {
    expect(existPath('gitignore')).toBe(false);
  });
});

/* ***************para saber si el path is absolute**************** */
describe('isAbsolute', () => {
  it('should be a function', () => 
  {
    expect(typeof(isAbsolute)).toBe('function');
  });
  it('la ruta es absoluta', () => {
    expect(isAbsolute('C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM015-md-links\\README.md')).toBe(true)
  }); 
  it('la ruta no es absoluta', () => {
    expect(isAbsolute('README.md')).toBe(false);
  });
}); 

/* ************convertir la ruta relativa a absoluta************ */
describe('check if the path is absolute', () => {
  it('check if it is a function', () => {
    expect(typeof(validatePath)).toBe('function');
  });
  it('convert relative path to absolute path', () => {
    expect(validatePath('README.md')).toBe('C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM015-md-links\\README.md');
  });
});

/* ********************leer el archivo********************* */
describe('readDirectory', () => {
  it('Validar si readDirectory es una función', () => {
    expect(typeof(readDirectory)).toBe('function');
  });
  it('Retorna los archivos del directorio', () => {
    expect(readDirectory('Directory\\file1')).toEqual([ 'readme2.md', 'routes.md' ]);
  });
});

/* ******************leer la extensión md******************** */
describe('Comprobar su isMd es una función', () => {
  it('Validar si es una función', () => {
    expect(typeof(extension)).toBe('function');
  });
  it('should return the file md extension', () => {
    expect(extension('README.md')).toBe(true);
  });
  it('retorna vacio si no es una extensión md', () => {
    expect(extension('index.js')).toBe(false);
  });
});

/* ******************** Leer los links ********************* */
describe('fileContent', () => {
  it('Validar si es una función', () => {
    expect(typeof(fileContent)).toBe('function');
  });
 it('retorna los links', () => {
    expect(fileContent('Directory/file1/routes.md')).toEqual(`C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM015-md-links\\README.md`);
  });
});

/* ****************** unir dos rutas ******************** */
describe('joinPaths', () => {
 it('Validar si es una función', () => {
    expect(typeof(joinPaths)).toBe('function');
  });
 it('retorna dos rutas juntas', () => {
    const result =  '\\home\\Laboratoria\\test';
    expect(joinPaths('/home/Laboratoria/', './test')).toBe(result);
  });
});

/* *************** Función recursiva ***************** */
describe('Function to step through a directory', () => {
  it('checkPath() should be a function', () => {
    expect(typeof(checkPath)).toBe('function');
  });
  it('checkPath() should return an array with files .md', () => {
    const pathDir = 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM015-md-links\\Directory\\file1';
    const result = [
      'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM015-md-links\\Directory\\file1\\readme2.md',
      'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM015-md-links\\Directory\\file1\\routes.md'
    ];
    expect(checkPath(pathDir)).toEqual(result);
  });
});

/* ************* Función para extraer los links *************** */
describe('function to get links from a file', () => {
  it('getLinks() should be a function', () => {
    expect(typeof(getLinks)).toBe('function');
  });
  it('getLinks should return an array of objects with three properties: href, text and file', () => {
    const pathFile = 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM015-md-links\\Directory\\file1\\readme2.md';
    const result = [
      {
        hrefLinks: 'https://nodejs.org/es/about/',
        textLinks: 'Acerca de Node.js - Documentación oficial',
        file: 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM015-md-links\\Directory\\file1\\readme2.md'
      },
      {
        hrefLinks: 'https://nodejs.org/api/fs.html',
        textLinks: 'Node.js file system - Documentación oficial',
        file: 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM015-md-links\\Directory\\file1\\readme2.md'
      },
      {
        hrefLinks: 'https://nodejs.org/api/http.html#http_http_get_options_callback',
        textLinks: 'Node.js http.get - Documentación oficial',
        file: 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM015-md-links\\Directory\\file1\\readme2.md'
      }
    ];
    expect(getLinks(pathFile)).toEqual(result);
  });
});
