// Implement an exclusive OR function called `preferredName` that has the following interface:

function getPreferredName( fname, lname ) {
	
	if ( fname && lname || !fname && !lname)
		return false;

	return (fname && lname ) ? false : fname || lname;
}