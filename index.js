const fs = require('fs');
const path = require('path');

// ejemplos de rutas *absoluta & relativa*
const absolutePath = 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM015-md-links\\src\\archivos\\path.md';
const relativePath = 'README.md'

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
const isFile = (route) => fs.lstatSync(route).isDirectory();
console.log('it is a file', isFile('./src/archivos'))
