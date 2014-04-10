// xor.js
// Pass two variables, returns a result of the variable that is populated if
// only one is populated; otherwise returns false.
//
// Author: Lawerence Fritts
// Version: 1.0

function preferredName(firstName, lastName) {
    //check for xor conditions                                              if FirstName; else LastName
    return (firstName && lastName) || (!firstName && !lastName) ? false : firstName ? firstName : lastName;
}

