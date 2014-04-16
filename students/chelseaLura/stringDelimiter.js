function stringDelimiter(input, seperator) {
    var currentCharacters = [];
    var finalStrings = [];
    for (i = 0; i < input.length; i++) {
        var currentLetter = input.charAt(i);
        if (currentLetter === seperator) {
          pushJoinedCharacters(currentCharacters, finalStrings);
          currentCharacters = [];
        } else {
            currentCharacters.push(currentLetter);
        }
    }
    pushJoinedCharacters(currentCharacters, finalStrings);
    return finalStrings;
}

function joinCharacters(characters, strings) {
    if(characters.length > 0) {
      var string = characters.join('');
      strings.push(string);
    }
    
}
