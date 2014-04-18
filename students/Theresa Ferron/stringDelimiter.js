function stringDelimiter(inputString, delimiter) {
    
   
    var results = [];
    var newString = '';
    
    for (var i = 0; i < inputString.length; i++) {
        if (inputString[i] === delimiter) {
            results.push(newString);
            newString = '';
            
        } else {
            newString += inputString[i];
        }
    }
    if (results.length) {
        results.push(newString);
    }
    return results;
}

var inputString = 'asdf$lskd1234$asdo'

var finalResult = stringDelimiter(inputString, '$');

console.log(finalResult);
console.log(finalResult.length);