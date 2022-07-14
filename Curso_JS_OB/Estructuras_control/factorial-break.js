var factorial = 10
var i = 1 
while(factorial){
    if(factorial == 1){
        break
    } else {
        i = i * factorial
        factorial -- 
    }  
}
console.log(i);