// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
    var newStr = []
    for (var i=0; i<str.length; i++){
        newStr += str[i]+str[i]
        
    }
    console.log(newStr);
}

doubleChar("String")
  