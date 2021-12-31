class calculadora {
    constructor(){

    }
sumar (num1, num2){
    return parseInt(num1) + parseInt(num2);
}
restar (num1, num2){
    return parseInt(num1) - parseInt(num2);
}
dividir  (num1, num2){
    return parseInt(num1) / parseInt(num2);
}
multiplicar  (num1, num2){
    return parseInt(num1) * parseInt(num2);
}
exponencial2(num1,exp){
    let numero = num1;
    for (var i = 1; i < exp; i++){
        numero = numero * num1;
    }
    return numero;
}
raizcuadrada(num){
    return Math.sqrt(num);

}

raizcubica(num){
    return Math.cbrt(num);

}
}

const Calculadora = new calculadora();

alert("que operacion desea realizar?");
let operacion = prompt("1: suma, 2:resta, 3:division, 4:multiplicar, 5:exponente, 6:raiz cuadrada, 7:raiz cubica");

if(operacion == 1){
    let numero1 = prompt("primer numero para sumar");
    let numero2 = prompt("segundo numero para sumar");
    resultado = Calculadora.sumar (numero1, numero2);
    alert(`tu resultado es ${resultado}`)

}
else  if(operacion == 2){
    let numero1 = prompt("primer numero para restar");
    let numero2 = prompt("segundo numero para restar");
    resultado = Calculadora.restar (numero1, numero2);
    alert(`tu resultado es ${resultado}`)

}

else  if(operacion == 3){
    let numero1 = prompt("primer numero para dividir");
    let numero2 = prompt("segundo numero para dividir");
    resultado = Calculadora.dividir (numero1, numero2);
    alert(`tu resultado es ${resultado}`)

}

else  if(operacion == 4){
    let numero1 = prompt("primer numero para multiplicar");
    let numero2 = prompt("segundo numero para multiplicar");
    resultado = Calculadora.multiplicar (numero1, numero2);
    alert(`tu resultado es ${resultado}`)

}

else  if(operacion == 5){
    let numero1 = prompt("primer numero para potenciar");
    let numero2 = prompt("exponente");
    resultado = Calculadora.exponencial2 (numero1, numero2);
    alert(`tu resultado es ${resultado}`)

}

else  if(operacion == 6){
    let numero1 = prompt("numero");

    resultado = Calculadora.raizcuadrada (numero1);
    alert(`tu resultado es ${resultado}`)

}


else  if(operacion == 7){
    let numero1 = prompt("numero");

    resultado = Calculadora.raizcubica (numero1);
    alert(`tu resultado es ${resultado}`)

}

else{
    alert("No se ha encontrado la operacion")
}
