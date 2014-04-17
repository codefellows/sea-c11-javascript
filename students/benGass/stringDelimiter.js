var stringDelimiter = function(strIn, sChar){
// (string, special character) -> array of strings seperated but not including special character
  var arrayOut =[]; 
  while (strIn){
    // index of special char
    var sCharIndex = strIn.indexOf(sChar);
    if (sCharIndex == -1) { sCharIndex = strIn.length; }
    // str to be pushed to arrayOut
    strPart = strIn.substr(0, sCharIndex);
    arrayOut.push(strPart);
    // used parts of input string removed
    strIn = strIn.substr(sCharIndex+1, strIn.length); 
  };
  return arrayOut;
};

