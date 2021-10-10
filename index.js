const fs = require('fs');
const fetch = require ('node-fetch');
const path = require('path');

/* ************ Para ver si la ruta existe **************** */
const existPath = (route) => fs.existsSync(route);

/* *********** Para ver si el path es absolute ************ */
const isAbsolute = (route) => path.isAbsolute(route);

/* ******** Convertir una ruta relativa a absoluta ******** */
const validatePath = (route) => path.resolve(route);

/* ************ Leer el directorio ************** */
const readDirectory = (route) => fs.readdirSync(route);

/* ********** Preguntar si es archivo md ********** */
const extension = (route) => (path.extname(route) === '.md');

/* *************  Retorna los links ************** */
const fileContent = (route) => fs.readFileSync(route, 'utf-8');

/* ************** unir dos rutas ************** */
const joinPaths = (path1, path2) => path.join(path1, path2);


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
//checkPath('Directory');
//console.log(checkPath('Directory'));

/* *********************** RegEx ************************ */
const regEx = /!*\[(.+?)\]\((https?.+?)\)/gi;
const regExText = /\[[^\s]+(.+?)\]/gi;
const regExLink = /\((https?.+?)\)/gi;

/* ************Función para extraer los links************ */
  const getAllLinks = (route) => {
    const allLinks = fileContent(route).match(regEx);
    //console.log(allLinks, 'xd')
    const hereLinks = [];
    if(allLinks !== null) { 
      allLinks.forEach((link) => {
        const objectLinks = {
         href : link.match(regExLink).join().slice(1,-1),
         text : link.match(regExText).join().slice(1,-1),
         file: route,
      };
      hereLinks.push(objectLinks);
      }); 
      //console.log(hereLinks);
    };
    return hereLinks;
  };
  //const demo = getAllLinks('Directory\\file1\\readme2.md')
  //console.log(getAllLinks('Directory\\file1\\readme2.md'))

/* ***************Función para validar****************** */
const validateLinks = (arrayLink) => {
  const arrStatus = arrayLink.map((link) => {
      return fetch(link.href)
      .then((result) => {
          const statusText = result.status === 200 ? 'Ok' : 'Fail';
          const data = {
              file: link.file,
              href: link.href,
              message: statusText,
              text: (link.text.slice(0, 50)), // Para limitar el texto a 50 caracteres
              status: result.status,
          };
          return data;
      })
      .catch((error) => {
          const data = {
              href: link.href,
              status: 'No status',
              file: link.file,
              message: `Fail ${error.message}`,
          };
          return data;
      });
  });
  return Promise.all(arrStatus)
  /*.then((res) => {
      console.log(res)
  })
  .catch((err) => {
      console.log(err)
  })*/
};
//validateLinks(demo);

module.exports = {
  existPath,
  isAbsolute,
  validatePath,
  readDirectory,
  extension,
  fileContent,
  joinPaths,
  checkPath,
  getAllLinks, 
  validateLinks
};
