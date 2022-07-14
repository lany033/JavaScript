a = [ [1, 5.2, 4, 0, -1], 9.2]
b = [([]), 0]

function sum (numbers) {
    "use strict";
    
    return console.log(numbers.reduce((a, b) => a + b, 0)); 
};

sum(a)