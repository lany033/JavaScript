function sinParametros(){
    return true
}

console.log(sinParametros());
/////////////////////////////////////////////////
setTimeout(function(){
    console.log("Hola soy una promesa");
}, 5000)


/////////////////////////////////////////////////
function* generaPar(){
    let num = 1;
    while(true) {
        num++
        if (num % 2 == 0) {
            yield num 
        }
    }
}

const gen = generaPar()
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
