const {   existPath,
  isAbsolute,
  validatePath,
  theDirectory,
  theFile,
  readDirectory,
  extension,
  fileContent,
  joinPaths} = require('../index');

// si el path existe
describe ('existPath', () => {
  it('should be a function', () => 
  {
    expect(typeof(existPath)).toBe('function');
  });
  it('should return true if the path exists', () => {
    expect(existPath('src\\archivos\\test')).toBe(true);
  });
  it('should return false if does not path exists ', () => {
    expect(existPath('gitignore')).toBe(false);
  });
});

// para saber si el path is absolute
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

// convertir la ruta relativa a absoluta
describe('check if the path is absolute', () => {
  it('check if it is a function', () => {
    expect(typeof(validatePath)).toBe('function');
  });
  it('convert relative path to absolute path', () => {
    expect(validatePath('README.md')).toBe('C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM015-md-links\\README.md');
  });
});

// si es un directorio
describe('Comprobar si es un directorio', () => {
  it('Validar si es una función', () => {
    expect(typeof(theDirectory)).toBe('function');
  });
  it('Retorna true si es un directorio', () => {
    expect(theDirectory('./src')).toBe(true);
  });
  it('Retonar falso si no es un directorio', () => {
    expect(theDirectory('README.md')).toBe(false);
  });
});

// si es un archivo
describe('Comprobar si theFile es una función', () => {
  it('Validar si es una función', () => {
    expect(typeof(theFile)).toBe('function');
  });
  it('Retorna true si es un file', () => {
    expect(theFile('README.md')).toBe(true);
  });
  it('Retonar falso si no es un file', () => {
    expect(theFile('test')).toBe(false);
  });
});

// leer el archivo
describe('readDirectory', () => {
  it('Validar si readDirectory es una función', () => {
    expect(typeof(readDirectory)).toBe('function');
  });
  it('Retorna los archivos del directorio', () => {
    expect(readDirectory('./src/archivos')).toEqual([ 'path.md', 'test' ]);
  });
});

// leer la extensión md
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

// Leer los links
describe('fileContent', () => {
  it('Validar si es una función', () => {
    expect(typeof(fileContent)).toBe('function');
  });
 it('retorna los links', () => {
    expect(fileContent('src/archivos/test/links.md')).toEqual(`https://curriculum.laboratoria.la/es/projects/md-links`);
  });
});

//unir dos rutas
describe('joinPaths', () => {
 it('Validar si es una función', () => {
    expect(typeof(joinPaths)).toBe('function');
  });
 it('retorna dos rutas juntas', () => {
    expect(joinPaths('src/archivos/test/links.md')).toEqual(`https://curriculum.laboratoria.la/es/topics/javascript/05-objects/01-objects`);
  });
});
