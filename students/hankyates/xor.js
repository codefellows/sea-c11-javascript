var missingName = function(firstName, lastName) {
  return (!!firstName ^ !!lastName) ? firstName || lastName : false;
}

//AMD
//return missingName;
//CJS
//module.exports = missingName;
