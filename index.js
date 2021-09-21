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
console.log('path exist', existPath(absolutePath));

// Para ver si el path es absolute
const isAbsolute = (route) => path.isAbsolute(route);
console.log('it is absolute', isAbsolute(relativePath));

// convertir una ruta relativa a absoluta
const validatePath = (route) => path.resolve(route);
console.log('path relative to absolute', validatePath(relativePath));

// Preguntar si es un directorio o archivo
const theDirectory = (route) => fs.lstatSync(route).isDirectory();
console.log('it is a directory', theDirectory('./src'));

//Preguntar si tiene un archivo
const theFile = (route) => fs.lstatSync(route).isFile();
console.log('it is a file', theFile(linksMD));

module.exports = {
  existPath,
  isAbsolute,
  validatePath,
  theFile,
};
