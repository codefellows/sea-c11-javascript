// Implement an exclusive OR function called `preferredName` that has the following interface:
 
// var FirstName,
//     LastName;
 
// preferredName(FirstName, LastName);
// // -> false
 
// FirstName = 'Hank';
 
// preferredName(FirstName, LastName);
// // -> 'Hank'
 
// LastName = 'Yates';
 
// preferredName(FirstName, LastName);
// // -> false
 
// FirstName = '';
 
// preferredName(FirstName, LastName);
// -> 'Yates'



function getPreferredName( fname, lname ) {
	var FirstName,
		LastName;

	FirstName = fname || undefined;
	LastName = lname || undefined;

	if ( FirstName && LastName === undefined )
		return false;

	else if ( LastName )
		return FirstName + " " + LastName;

	else
		return FirstName;

}