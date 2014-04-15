// Implement an exclusive OR function called `preferredName` that has the following interface:

function getPreferredName( fname, lname ) {
	
	if ( fname && lname )
		return false;

	if ( !fname && !lname )
		return false;

	else if ( lname )
		return lname;

	else
		return fname;

}

// return (fname && lname ) ? false : fname || lname;