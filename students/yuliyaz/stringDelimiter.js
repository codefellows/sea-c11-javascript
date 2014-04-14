
// Write a function that takes in a string seperated by a seperator, and // will return an array of strings in between the seperators.
 
var sampleInput = 'asdf$lskd1234$asdo';
function stringDelimiter (sampleInput, delimeter){
var result = sampleInput.split(delimeter);
return result;
}
stringDelimiter(sampleInput, '$');