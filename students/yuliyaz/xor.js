//XOR with ^

var FirstName,
    LastName;
FirstName = 'Hank';
 LastName = '';
 function preferredName (){
var Name = FirstName + LastName;
var FirstOrLast = !FirstName ^ !LastName ? Name : false;
return FirstOrLast;
 }

