var FirstName,
    LastName;
 
preferredName = (FirstName ? !LastName : LastName) 
 
FirstName = 'Hank';
 
preferredName = (FirstName ? !LastName : LastName) 
 
LastName = 'Yates';
 
preferredName = (FirstName ? !LastName : LastName) 
 
FirstName = '';
 
preferredName = (FirstName ? !LastName : LastName) 

console.log(preferredName);