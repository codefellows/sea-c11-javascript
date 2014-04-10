function preferredName(fName, lName){
    return fName && lName ? false : !(fName || lName) ? false : fName || lName;
}