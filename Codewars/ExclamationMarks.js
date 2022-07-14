function removeExclamationMarks(s) {
    var wordWithoutExclamation = ""
    for(var i=0; i<s.length; i++){
        if (s[i] !== "!" ){
            wordWithoutExclamation += s[i] 
            
        }
        else {

        }
    }
    console.log(wordWithoutExclamation);
    
}

removeExclamationMarks("hello world!")