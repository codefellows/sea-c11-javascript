// Using a ternary operator. Implement an exclusive OR function called `preferredName` that has the following interface:
 
var firstName,
    lastName;

var preferredName = function(first, last) {
	return ((!first && !last) || (first && last) ? false : (first || last));
}

preferredName(firstName, lastName);
// -> false

firstName = 'Hank';
 
preferredName(firstName, lastName);
// -> 'Hank'
 
lastName = 'Yates';
 
preferredName(firstName, lastName);
// -> false
 
firstName = '';
 
preferredName(firstName, lastName);
// -> 'Yates'
