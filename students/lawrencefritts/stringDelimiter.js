// stringDelimiter.js
// Given a string and a delimiter, this will parse the string into an array
// of delimited strings.  Returns the parsed array.
//
// Author: Lawerence Fritts
// Version: 1.0

function stringDelimiter(inputString, delimiter) {
    var stringList = [];
    var workingString = "";
    for(i = 0; i < inputString.length; i++) {

        //pushes completed string to array, increases i so next string is started
        if (inputString[i] === delimiter) {
            stringList.push(workingString);
            workingString = "";
            i++;
        }
        workingString = workingString + inputString[i];
    }
    //push last string to array if not empty
    if (workingString) {
        stringList.push(workingString);
    }
    return stringList;
}