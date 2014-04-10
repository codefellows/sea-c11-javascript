var FirstName,
	LastName;

function preferredName (FirstName, LastName) {
    return(((FirstName && LastName) || (!FirstName && !LastName))
        ? false 
        : FirstName || LastName);
};

preferredName(FirstName, LastName);
 
FirstName = 'Hank';

 
preferredName(FirstName, LastName);
 
LastName = 'Yates';

 
preferredName(FirstName, LastName);
 
FirstName = '';

 
preferredName(FirstName, LastName);






