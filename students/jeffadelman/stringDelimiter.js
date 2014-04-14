var stringDelimiter = function(inputStr, limitingChar) {
  var delimited = [];
  while(inputStr.indexOf(limitingChar) !== -1) {
    var str = (inputStr.substr(0, inputStr.indexOf(limitingChar)));
    if (str) {
      delimited.push(str);
    }
    inputStr = inputStr.slice(inputStr.indexOf(limitingChar)+1);
  }
  if (inputStr){
    delimited.push(inputStr);
  }
  return delimited;
};