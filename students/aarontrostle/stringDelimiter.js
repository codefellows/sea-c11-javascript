// Solution to https://gist.github.com/hankyates/10230737

function stringDelimiter(inputString, delimiter) {
  var results = [];
  var newString = '';
  for (var i=0; i < inputString.length; i++) {
    if (inputString[i] == delimiter) {
      results.push(newString);
      newString = '';
    } else {
      newString += inputString[i];
    }
  }
  if (results.length) {
    results.push(newString);
  }
  return results;
}

var sampleInput = 'asdf$lskd1234$asdo';

stringDelimiter(sampleInput, '$');
