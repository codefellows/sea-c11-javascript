var firstName,
	lastName;

	//defining initial variables

function isEmptyString(stringtoCheck){
	if (stringtoCheck == undefined) {
		return false;

		//if a person enters nothing it would show up as false

	} else if (stringtoCheck.length = 0) {
		return false;

		//ensures that even if the person enters "" it won't appear as a name

	} else {
		return true;
	}
}
function preferredName(firstName, lastName) {
	if (((!isEmptyString(firstName) && !isEmptyString(lastName)) || (isEmptyString(firstName) && isEmptyString(lastName)))) {
		return false;
	} else if (!isEmptyString(firstName)) {
		return lastName;
	} else {
		return firstName;
	}
}

//preferredName function has a xor as the first conditional as there are two cases in which the code should return false.
//if the code passes the xor statement then we can use less complex conditionals