// Write a function that takes in a string seperated by a seperator, and will return an array 
// of strings in between the seperators.
 
var stringDelimiter = function(x, y) {
  var delimited = [];
  while(x.indexOf(y) !== -1) {
    delimited.push(x.substr(0, x.indexOf(y)));
    x = x.slice(x.indexOf(y)+1);
  }
  delimited.push(x);
  return delimited;
};

var sampleInput = 'asdf$lskd1234$asdo';
 
stringDelimiter(sampleInput, '$');
// -> ['asdf', 'lskd1234', 'asdo']