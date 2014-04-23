function stringDelimiter (sampleInput, delimiter) {

var delPosition;
var subString;
var stringtoArray = [];
var initialPostion = 0;

do {

delPosition = sampleInput.indexOf(delimiter);

if (delPosition === -1){

delPosition = sampleInput.length;
}

subString = sampleInput.substring(initialPostion, delPosition);
stringtoArray.push(subString);
sampleInput = sampleInput.substring(delPosition +1);
}

while (sampleInput);
return stringtoArray;
}