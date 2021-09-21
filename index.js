const fs = require('fs');
const path = require('path');

// ejemplos de rutas *absoluta & relativa*
const absolutePath = 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM015-md-links\\src\\archivos\\path.md';
const relativePath = 'README.md'

// console.log('hello')

// Para ver si la ruta existe
const existPath = (link) => fs.existsSync(link);
console.log('path exist', existPath(absolutePath));

// Para ver si el path es absolute
const isAbsolute = (link) => path.isAbsolute(link);
console.log('it is absolute', isAbsolute(relativePath));

// convertir una ruta relativa a absoluta
const validatePath = (link) => path.resolve(link);
console.log('path relative to absolute', validatePath(relativePath));

// preguntar si es un directorio
