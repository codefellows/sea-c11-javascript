

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
