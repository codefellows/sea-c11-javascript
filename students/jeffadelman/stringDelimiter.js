var stringDelimiter = function(x, y) {
  var delimited = [];
  while(x.indexOf(y) !== -1) {
    var str = (x.substr(0, x.indexOf(y)));
    if (str) {
      delimited.push(str);
    }
    x = x.slice(x.indexOf(y)+1);
  }
  if (x){
    delimited.push(x);
  }
  return delimited;
};