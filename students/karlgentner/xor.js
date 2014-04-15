//Karl Gentner - CFF2 Javascript - Exclusive OR function - 4/14/2014


function preferredName(FirstName, LastName){
  if( ( FirstName && !LastName ) || ( !FirstName && LastName ) ) {
    result = FirstName ? FirstName : LastName; 
  } else {
    result = "false";
  }
  return result;
}

