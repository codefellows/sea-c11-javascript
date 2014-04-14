//XOR with ^

 var FirstName,
    LastName;
FirstName = 'h';
 LastName = '';
 function preferredName (){
var Name = FirstName + LastName;
var FirstOrLast = ((FirstName && !LastName)^(LastName && !FirstName)) ? Name : false;
return FirstOrLast;
 }


//XOR with || and &&

 var FirstName,
    LastName;
FirstName = 'h';
 LastName = 'y';
 function preferredName (){
var Name = FirstName + LastName;
var FirstOrLast = ((FirstName || LastName) && !(FirstName && LastName)) ? Name : false;
return FirstOrLast;
 }

//if else

  var FirstName,
      LastName;
FirstName = '';
 LastName = '';
 function preferredName (){
 var Name;
if(FirstName && !LastName){
	Name = FirstName;
}
else if(!FirstName && LastName ){
	Name = LastName;
}
else {
	Name = false;
}
return Name;
 }