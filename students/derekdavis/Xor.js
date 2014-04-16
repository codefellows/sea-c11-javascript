

var preferredName = function (fName, lName) {
    var isFirstNameDefined = !!fName;
    var isLastNameDefined = !!lName;



    if ((isFirstNameDefined && isLastNameDefined) || (!isFirstNameDefined && !isLastNameDefined)) {
        return false;
    } else if (isFirstNameDefined && !isLastNameDefined) {
        return fName;
    } else if (!isFirstNameDefined && isLastNameDefined) {
        return lName;
    }

};
/*
var FirstName,
    LastName;

console.log(preferredName(FirstName, LastName));
// -> false

FirstName = 'Hank';

console.log(preferredName(FirstName, LastName));
// -> 'Hank'

LastName = 'Yates';

console.log(preferredName(FirstName, LastName));
// -> false

FirstName = '';

console.log(preferredName(FirstName, LastName));
// -> 'Yates'
    */