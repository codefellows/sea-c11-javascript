function stringDelimiter(inputString, delimiter) {
    
    //establishes an array, results, to store results
    var results = [];
    
    //establishes a variable, newString, that is undefined, but will be filled from the results.push from the first 'if statement'
    var newString = '';

    //loops through the array for the number of times equal to the number of items in the array, inputString    
    for (var i = 0; i < inputString.length; i++) {
        
        //puts array items into array, newString, UNTIL array item is a delimiter
        if (inputString[i] === delimiter) {
            results.push(newString);
            newString = '';
   
        //after array item is determined to be a delimiter, a new, newString is started and repeated    
        } else {
            newString += inputString[i];
        }
    }
    //once function has iterated through the array items the amount fo times as the array is long it stops (returns "results")
    if (results.length) {
        results.push(newString);
    }
    return results;
}

// input variable 
var inputString = 'asdf$lskd1234$asdo'

//defined a variable as something to console.log
var finalResult = stringDelimiter(inputString, '$');

