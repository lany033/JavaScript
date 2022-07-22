const fibonacci = (num) => {
    var current = 1
    var previous = 0
    var array = []
    var temp
    while (num >= 0){
        temp = current
        current = current + previous
        previous = temp
        array.push(temp)
        num--
    }
    return array
}


console.log(fibonacci(6));