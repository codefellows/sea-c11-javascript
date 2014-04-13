// I'm struggling figuring out how to test this - so I'm sending it untested.  
//I think I have the general idea....

var (firstName);
var (lastName);

function preferredName (firstName, lastName)
if ((firstName && lastName) || (!firstName && lastName)) {
    return false
    }
    else {
        return (firstName || lastName)
        };