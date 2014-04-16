//Karl Gentner - CFF2 Javascript - Exclusive OR function - Updated 4/16/2014


function preferredName(FirstName, LastName){
  if( ( FirstName && !LastName ) || ( !FirstName && LastName ) ) {
    result = FirstName ? FirstName : LastName; 
  } else {
    result = false;
  }
  return result;
}

