// Using a ternary operator. Implement an exclusive OR function called `preferredName` that has the following interface:

var FirstName,
    LastName;

function preferredName(FirstName, LastName){
	if (FirstName && !LastName) || (!FirstName && LastName){
          return (FirstName || LastName);
    } else
        return false;
    }
}
