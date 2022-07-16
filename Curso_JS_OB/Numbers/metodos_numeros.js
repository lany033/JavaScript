//Operador .valueOf() - Obtener valores numericos a partir de literlaes

let a = 2;
let b = new Number(3) //castear dentro de b un valor numerico, prototipo  number

console.log(b); //Number 3 {}
console.log(b.valueOf(b)); //3 Obtener valores primitivos


let str = new String("Hola soy un string")

console.log(str);

//NaN 
let n = Number('adios')
console.log(n);
console.log(isNaN(n));

let numerador = 19
let denominador = 0

console.log(numerador/denominador);

//
let numero = '5.89'

console.log(Number(numero));

console.log(parseInt(numero));

let num3 = 4

console.log(parseFloat(num3))

//Numeros hexadecimales
let numHex = '0x3a5b7' //no son de coma flotante
console.log(parseInt(numHex)); //239031

//obtener valor maximo y minimo en JS

let min_presicion = Number.EPSILON
let min_valor_JS = Number.MIN_VALUE
let max_valor_JS = Number.MAX_VALUE