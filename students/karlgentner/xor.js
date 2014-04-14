//Karl Gentner - Code Fellows F2 Javascript 4/14/14
//Exclusive OR function


function preferredName(x, y){
// Exclusive OR 
  if( ( x && !y ) || ( !x && y ) ) {
    result = x ? x : y; 
  } else {
    result = "false";
  }
  console.log(result);
}

/*
// Implement an exclusive OR function called `preferredName` that has the following interface:

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
