// Implement an exclusive OR function called ‘preferredName’ that returns false if both names are defined or both names are undefined, but if only one name is defined, it returns that name.

var preferredName = function(FirstName, LastName) {
	// Check are we missing any names? 
	if (!FirstName || !LastName) {
		// If we only have FirstName, return it
		if (FirstName) { return FirstName; }
		// If we only have LastName, return it
		else if (LastName) { return LastName; }
		// If we have neither name, return false
		else {return false}
	} else {
		// If we have both names, return false
		return false;
	}
};

// Testing
// ---------------

var FirstName, LastName;

// Case 1: Both names are undefined
var result = preferredName(FirstName,LastName);
console.log("Result: " + result);
// -> false

FirstName = "Bilbo";

// Case 2: Only FirstName is defined
var result = preferredName(FirstName,LastName);
console.log("Result: " + result);
// -> Bilbo

LastName = "Baggins";

// Case 3: Both names are defined
var result = preferredName(FirstName,LastName);
console.log("Result: " + result);
// -> false

FirstName = "";

// Case 4: Only LastName is defined
var result = preferredName(FirstName,LastName);
console.log("Result: " + result);
// -> Baggins
