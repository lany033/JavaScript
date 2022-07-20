import { multiplicacion } from './funcion/controller.js';
import chalk from 'chalk'; 

const result = multiplicacion(1,2,4,5)
console.log(chalk.green("resultado: " + result));