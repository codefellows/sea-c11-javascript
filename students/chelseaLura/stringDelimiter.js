function stringDelimiter(input, seperator) {
    var delimiter = [];
    var finalStrings = [];
    for (i = 0; i < input.length; i++) {
        var currentLetter = input.substring(i, i + 1);
        if (currentLetter === seperator) {
          concatDelimiter(delimiter, finalStrings);
          delimiter = [];
        } else {
            delimiter.push(currentLetter);
        }
    }
    concatDelimiter(delimiter, finalStrings);
    return finalStrings;
}

function concatDelimiter (smallArray, largeArray) {
    if(smallArray.length > 0) {
      var string = smallArray.join('');
      largeArray.push(string);
    }
    
}
