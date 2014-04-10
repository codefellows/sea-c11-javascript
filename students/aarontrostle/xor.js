// Solution to https://gist.github.com/hankyates/9680217

function preferredName(fname, lname) {
  return !!fname == !!lname ? false : fname || lname;
}

var FirstName,
    LastName;

console.log(preferredName(FirstName, LastName));

FirstName = 'Hank';

console.log(preferredName(FirstName, LastName));

LastName = 'Yates';

console.log(preferredName(FirstName, LastName));

FirstName = '';

console.log(preferredName(FirstName, LastName));
