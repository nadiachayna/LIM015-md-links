const api = require('./index');

const mdLinks = (route, options = {}) => 
new Promise ((resolve, rejected) => {
    if(!api.existPath(route)) {
        rejected('does not exist');
    } else {
        const allRoutes = api.checkPath(route);
        let arrayRoutes = [];
        allRoutes.forEach(element => {
            const validLinks = api.getAllLinks(element);
            arrayRoutes = arrayRoutes.concat(validLinks)
        }) //validación false
        if(!(options.validate)) { 
            resolve(arrayRoutes);
        } else {
            const statusLink = api.validateLinks(arrayRoutes);
            resolve(statusLink);
        }
    }
});

module.exports = { mdLinks }
/*const routeLink = mdLinks('C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM015-md-links\\Directory\\file1', { validate:true });
routeLink
.then((res) => console.log(res))
.catch((error) => console.log(error));*/
