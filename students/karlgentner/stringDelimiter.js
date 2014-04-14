//Karl Gentner - Code Fellows F2 Javascript 4/14/14
//String Delimiter function -  takes in a string seperated by a seperator, and will return an array 
// of strings in between the seperators.


function stringDelimiter(x,y){
  var result = [];
  var num = x.indexOf(y);
  
  while (num != -1){ // indexOf returns -1 if y is not found
   result.push(x.substring(0,num)); //push substring to array
   x = x.substring(num + 1, x.length); //resize string
   num = x.indexOf(y); // find next instance of y
  }
  result.push(x); //push remaining string to array
  console.log(result); 
}
 
//var sampleInput = 'asdf$lskd1234$asdo';
 
//stringDelimiter(sampleInput, '$');
// -> ['asdf', 'lskd1234', 'asdo']
