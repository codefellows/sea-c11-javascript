function stringDelimiter(input, seperator) {
    var delimiter = [];
    var finalStrings = [];
    var newString = '';
    for (i = 0; i < input.length; i++) {
        var currentLetter = input.substring(i, i + 1);
        if (currentLetter === seperator) {
          concat(delimiter, finalStrings);
          delimiter = [];
        } else {
            delimiter.push(currentLetter);
        }
    }
    concat(delimiter, finalStrings);
    return finalStrings;
}

function concat (smallArray, largeArray) {
    if(smallArray.length > 0) {
      var string = smallArray.join('');
      largeArray.push(string);
    }
    
}