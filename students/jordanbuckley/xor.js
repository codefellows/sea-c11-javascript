// Implement an exclusive OR function called ‘preferredName’ that returns false if both names are defined or both names are undefined, but if only one name is defined, it returns that name.

var preferredName = function(FirstName, LastName) {
  if ((FirstName && !LastName) || (!FirstName && LastName)) { 
    return (FirstName || LastName); }
  else return false;
};