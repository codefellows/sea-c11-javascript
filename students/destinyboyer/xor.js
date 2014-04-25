function isEmptyString(stringtoCheck){
	if (!!stringtoCheck){
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