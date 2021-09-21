const path = require('path');
const fs = require('fs');

// ejemplos de rutas *absoluta & relativa*
const absolutePath = 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM015-md-links\\src\\archivos\\path.md';
const relativePath = 'README.md'

// console.log('hello')

// Para ver si la ruta existe
fs.access(absolutePath, (err) => {
  console.log(`${absolutePath} ${err ? 'not exist' : 'exist'}`)
})

// Para ver si el path es absolute
const isAbsolute = path.isAbsolute(absolutePath)
console.log('Es absoluta', path.isAbsolute(absolutePath))

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
