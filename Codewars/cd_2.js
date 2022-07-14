function countPositivesSumNegatives(input) {
  var b = 0
  for (var i=0; i <input.length; i++){
  
   
    if (input[i] > 0) {
      
      a++
    }
    else {
      
      b += input[i] 
    }
    
  }
    return [a,b]
}
    


a = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]
countPositivesSumNegatives(a)