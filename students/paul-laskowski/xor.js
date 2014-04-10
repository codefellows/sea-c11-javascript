// Using a ternary operator. Implement an exclusive OR function called `preferredName` that has the following interface:
 
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


function preferredName(first, last) {
	if (first && last){
		return false;
	} else if (first) {
		return first;
	} else if (last) {
		return last;
	} else {
		return false;
	}
	
}


