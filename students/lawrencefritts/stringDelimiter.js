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
            //checks for an empty string
            //for example, csv "6,,7" would indicate an empty value between 6 and 7
            //same idea, will also check to see if empty value at beginning
            if (inputString[i-1] === delimiter || inputString[i-1] === "") {
                stringList.push("");
            } else {
            stringList.push(workingString);
            workingString = "";
            }
        } else {
            workingString = workingString + inputString[i];
        }
    }
    //push last string to array if not delimited
    if (workingString) {
        stringList.push(workingString);
    }
    return stringList;
}