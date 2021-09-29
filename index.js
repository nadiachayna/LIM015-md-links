const fs = require('fs');
const { readFile } = require('fs/promises');
const path = require('path');

/* ************ rutas absoluta & relativa **************** */ 
const absolutePath = 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM015-md-links\\Directory\\file1\\routes.md';
const relativePath = 'Directory\file1\routes.md';

/* ************ Para ver si la ruta existe **************** */
const existPath = (route) => fs.existsSync(route);

/* *********** Para ver si el path es absolute ************ */
const isAbsolute = (route) => path.isAbsolute(route);

/* ******** Convertir una ruta relativa a absoluta ******** */
const validatePath = (route) => path.resolve(route);

/* ************ Leer el directorio ************** */
const readDirectory = (route) => fs.readdirSync(route);

/* ********** Preguntar si es archivo md ********** */
const extension = (route) => path.extname(route) === '.md';

/* *************  Retorna los links ************** */
const fileContent = (route) => fs.readFileSync(route, 'utf-8');

/* ************** unir dos rutas ************** */
const joinPaths = (path1, path2) => path.join(path1,path2);


/* *********Función recursiva que recorre un directorio y lea los paths.md ********** */
const checkPath = (path) => {
  statsObj = fs.statSync(path); // devolver información sincrónicamente sobre la ruta de archivo dada.
  let array = [];
  if ((statsObj.isFile() && extension(path))) {  //si es un archivo y es md
    array.push(path); 
  } else if (statsObj.isDirectory()) {   //si la ruta esta dentro de un directorio
    const arrayPaths = readDirectory(path); 
    arrayPaths.forEach(element => { 
      const pathsDir = joinPaths(path,element); 
      const savePaths = checkPath(pathsDir);    
      array = array.concat(savePaths);
    });
  }
  return array;
};
checkPath('Directory');
//console.log(checkPath('Directory'));

/* *********************** RegEx ************************ */
const regEx = /!*\[(.+?)\]\((https?.+?)\)/gi;
const regExText = /\[[^\s]+(.+?)\]/gi;
const regExLink = /\((https?.+?)\)/gi;

/* ************Función para extraer los links************ */
  const getLinks = (route) => {
    const allLinks = fileContent(route).match(regEx);
    //console.log(allLinks, 'xd')
    const hereLinks = [];
    if(allLinks !== null) { 
      allLinks.forEach((link) => {
        const objectLinks = {
         hrefLinks : link.match(regExLink).join().slice(1,-1),
         textLinks : link.match(regExText).join().slice(1,-1),
         file: route,
      };
      hereLinks.push(objectLinks);
      }); 
      //console.log(hereLinks);
    };
    return hereLinks;
  };
  getLinks('Directory\\file1\\readme2.md')
  console.log(getLinks('Directory\\file1\\readme2.md'))

  
module.exports = {
  existPath,
  isAbsolute,
  validatePath,
  readDirectory,
  extension,
  fileContent,
  joinPaths
};
