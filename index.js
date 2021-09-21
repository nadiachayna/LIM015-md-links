const fs = require('fs');
const path = require('path');

// ejemplos de rutas *absoluta & relativa*
const absolutePath = 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM015-md-links\\src\\archivos\\path.md';
const relativePath = 'README.md'

// console.log('hello')

// Para ver si la ruta existe
const existPath = (link) => fs.existsSync(link);
console.log('path exist', existPath(relativePath));

// Para ver si el path es absolute
const isAbsolute = path.isAbsolute(absolutePath)
console.log('Es absoluta', isAbsolute(absolutePath))

// convertir una ruta relativa a absoluta
function validatePath (relativePath) {
  // operator ternario condiciones? expr1 :expr2
  return path.isAbsolute(relativePath) === true ? relativePath : path.resolve(relativePath)
}
console.log(validatePath(absolutePath))

// Funcion que verifica si existe la ruta
function existsRoute (absolutePath) {
  return fs.existsSync(absolutePath)
}
console.log(existsRoute(absolutePath))

/* path.isAbsolute(relativePath, () => {
  console.log(`${path.isAbsolute(relativePath) === true ? relativePath : path.resolve(relativePath)}`)
}) */
