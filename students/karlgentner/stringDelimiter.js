/*Karl Gentner - CFF2 Javascript - stringDelimiter 4/14/14. Accepts a string seperated by a seperator and returns an array of strings in between the seperators. */


function stringDelimiter(str, delimiter){ 
  var resultArray = [];
  var num = str.indexOf(delimiter);
  
  while (num != -1){ // indexOf returns -1 if delimiter is not found
   resultArray.push(str.substring(0,num)); //push substring to array
   str = str.substring(num + 1, str.length); //resize string
   num = str.indexOf(delimiter); // find next instance of delimiter
  }
  resultArray.push(str); //push remaining string to array
  return resultArray; 
}
 

