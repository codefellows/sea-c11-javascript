/* Assignment Instructions
Write a function that takes in a string seperated by a seperator, and will return an array 
 of strings in between the seperators.

var sampleInput = 'asdf$lskd1234$asdo';

 stringDelemiter(sampleInput, '$');
 -> ['asdf', 'lskd1234', 'asdo']
*/

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

var sampleInput = 'asdf$lskd1234$asdo';
var test = stringDelemiter(sampleInput, '$')
console.log('test result of inputs "asdf$lskd1234$asdo" and "$" expecting "["asdf", "lskd1234", "asdo"]" to be returned', test);
