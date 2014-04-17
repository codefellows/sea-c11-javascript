var stringDelemiter = function(strIn, sChar){
// (string, special character) -> array of strings seperated but not including special character
  var arrayOut =[]; 
  while (strIn){
    // index of special char
    var sCharIndex = strIn.indexOf(sChar);
    var charPresent = (sCharIndex ==-1) ? strIn.length : sCharIndex;
    // str to be pushed to arrayOut
    strPart = strIn.substr(0, charPresent);
    arrayOut.push(strPart);
    // used parts of input string removed
    strIn = strIn.substr(((charPresent==strIn.length)? strIn.length: charPresent+1), strIn.length); 
  };
  return arrayOut;
};
