preferredName = function (FirstName, LastName){
	if(FirstName && LastName) {
		return false;
	} else if (!FirstName && !LastName) {
		return false;
	} else if (FirstName) {
		return FirstName;
	} else {
		return LastName;
	}
}

console.log(preferredName('', ''));