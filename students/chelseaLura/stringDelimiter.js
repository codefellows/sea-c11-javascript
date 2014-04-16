function stringDelimiter(input, seperator) {
    var currentCharacters = '';
    var finalStrings = [];
    for (var i = 0; i < input.length; i++) {
        var currentLetter = input.charAt(i);
        if (currentLetter === seperator) {
            pushNonEmptyCharacters(currentCharacters, finalStrings);
            currentCharacters = '';
        } else {
            currentCharacters += currentLetter;
        }
    }
    pushNonEmptyCharacters(currentCharacters, finalStrings);
    return finalStrings;
}

function pushNonEmptyCharacters(characters, strings) {
    if(characters.length > 0) {
        strings.push(characters);
    }
}

