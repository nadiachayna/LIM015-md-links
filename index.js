const fs = require('fs');
const path = require('path');

// ejemplos de rutas *absoluta & relativa*  
const absolutePath = 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM015-md-links\\src\\archivos\\path.md';
const relativePath = 'README.md';

//  file
const linksMD = 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM015-md-links\\src\\archivos\\test\\links.md';

// console.log('hello')

// Para ver si la ruta existe
const existPath = (route) => fs.existsSync(route);
console.log('Does the route exist?', existPath(absolutePath));

// Para ver si el path es absolute
const isAbsolute = (route) => path.isAbsolute(route);
console.log('Is the route absolute?', isAbsolute(relativePath));

// Convertir una ruta relativa a absoluta
const validatePath = (route) => path.resolve(route);
console.log('convert path relative to absolute', validatePath(relativePath));

// Preguntar si es un directorio o archivo
const theDirectory = (route) => fs.lstatSync(route).isDirectory();
console.log('Is a directory?', theDirectory('./src'));

// Preguntar si tiene un archivo
const theFile = (route) => fs.lstatSync(route).isFile();
console.log('Is a file?', theFile(linksMD));

// Leer el archivo
const readDirectory = (route) => fs.readdirSync(route);
console.log('What are the files?', readDirectory('./src/archivos'));

// Preguntar si es archivo md
const extension = (route) => path.extname(route) === '.md';
console.log('Is the md extension?', extension(absolutePath));

// Retorna los links
const fileContent = (route) => fs.readFileSync(route, 'utf-8');
console.log('what are the files?', fileContent('src/archivos/test/links.md'));

// unir dos rutas
const joinPaths = (path1, path2) => path.join(path1,path2);
console.log('Two routes join', joinPaths(absolutePath,relativePath))

module.exports = {
  existPath,
  isAbsolute,
  validatePath,
  theDirectory,
  theFile,
  readDirectory,
  extension,
  fileContent
};
