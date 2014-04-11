// Using a ternary operator. Implement an exclusive OR function called `preferredName` that has the following interface:
/* 
var FirstName,
    LastName;
 
preferredName(FirstName, LastName);
// -> false

FirstName = 'Hank'; 
preferredName(FirstName, LastName);
// -> 'Hank'
 
LastName = 'Yates'; 
preferredName(FirstName, LastName);
// -> false
 
FirstName = ''; 
preferredName(FirstName, LastName);
// -> 'Yates'
*/

// preferred names with a single ternary

var preferredName = function(a, b){
  return((a || b) && !(a && b)) ? a||b : false;
};

// preferred names with a double ternary

var preferredName = function(a, b){
  return (a&&!b) ? a : (!a&&b) ? b : false;
  
};

// preferred names with conditionals

var preferredName = function(a, b){
  if ((a || b) && !(a && b)){
    if (a){
      return a;
    } else if (b) {
      return b;
    } else {
      return false;
    }
  } else {
    return false;
  }
};


*/
/*
  aName = ''
  bName = ''
  if (aName + bName == aName) { return aName;
  } else if (aName + bName == bName){ return bName;
  } else { return false; }
};
  */
