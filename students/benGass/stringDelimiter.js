var stringDelemiter = function(strIn, sChar){
// (string, special character) -> array of strings seperated but not including special character
  var arrayOut =[]; 
  while (strIn.length != 0){
    // index of special char
    var sCharI = strIn.indexOf(sChar);
    // str to be pushed to arrayOut
    strPart = strIn.substr(0, (sCharI !=-1) ? sCharI : strIn.length);
    arrayOut.push(strPart);
    // used parts of input string removed
    strIn = strIn.substr((sCharI !=-1) ? sCharI+1 : strIn.length, strIn.length);   
  };
  return arrayOut;
};

