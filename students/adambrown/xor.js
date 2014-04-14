// Using a ternary operator. Implement an exclusive OR function called `preferredName` that has the following interface:

var FirstName,
    LastName;

function preferredName(FirstName, LastName){
	if (FirstName){
      if(LastName){
        return false;
      } else
        return true;
    }else{
      if(LastName){
        return true;
      }else{
        return false;
      }
    }
	
}
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
