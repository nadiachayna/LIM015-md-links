#!/usr/bin/env node

const { mdLinks } = require('./mdlinks');
const chalk = require('chalk');
const { statsLinks, brokenLinks, helpMessage, messageErrorRoute, messageNotLinks } = require('./cli-status');
console.log(chalk.redBright('hello'))

//console.log(process.argv)
const option = process.argv.slice(2); //método de un array, 
const userPath = process.argv[2];

const validate = option.includes('--validate');
const stats = option.includes('--stats');

if(option.length === 1){
    mdLinks(userPath, { validate:false } )
    .then(res => console.log(res))
    .catch((rej) => {
        if(rej === 'does not exist'){
            console.log(chalk.red(messageErrorRoute));
        } else {
            console.log(chalk.green(messageNotLinks));
        }
    })
} else {
    if(validate && stats){
        mdLinks(userPath, {validate:true})
        .then(res =>{
            console.table(chalk.greenBright(statsLinks(res)))
            console.table(chalk.red(brokenLinks(res)))})
        .catch(()=>console.log(chalk.greenBright(messageErrorRoute)))
    }else if (validate){
        mdLinks(userPath, {validate:true})
        .then(res => console.log(res))
        .catch(()=>console.log(chalk.greenBright(messageErrorRoute)))
    }else if(stats){
        mdLinks(userPath, {validate:true})
        .then(res => console.table(chalk.greenBright(statsLinks(res))))
        .catch(()=>console.log(chalk.greenBright(messageErrorRoute)))
    }else{
       mdLinks(userPath, { validate:true })
        .then( console.log(chalk.cyanBright(helpMessage)))
        .catch(()=>console.log(chalk.greenBright(messageErrorRoute)))
    }
}