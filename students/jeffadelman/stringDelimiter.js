var stringDelimiter = function(inputStr, limitingChar) {
  var delimited = [];
  while(inputStr.indexOf(limitingChar) !== -1) {
    var firstChar = inputStr.indexOf(limitingChar),
        partialStr = (inputStr.substr(0, firstChar));
    if (partialStr) {
      delimited.push(partialStr);
    }
    inputStr = inputStr.slice(firstChar + 1);
  }
  if (inputStr){
    delimited.push(inputStr);
  }
  return delimited;
};