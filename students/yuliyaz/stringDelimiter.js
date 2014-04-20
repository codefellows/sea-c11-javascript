
// Write a function that takes in a string seperated by a seperator, and // will return an array of strings in between the seperators.
 
var sampleInput = 'asdf$lskd1234$asdo';
function stringDelimiter (sampleInput, delimeter){
var result = sampleInput.split(delimeter);
return result;
}


//substring

var sampleInput = 'asdf$lskd1234$asdo'
var arrayOfStrings
function stringDelimiter (){
//var result = sampleInput.split(delimeter);
//for (var i = 0; i < sampleInput.length; i++) {
	var result = sampleInput.substring(sampleInput.indexOf('$'));
	return result;
	}
//works not correctly
var sampleInput = 'asdf$lskd1234$asdo'
var arrayOfStrings = []
function stringDelimiter (){
//var result = sampleInput.split(delimeter);
for (var i = sampleInput.indexOf('$'); i < sampleInput.length; i++) {
	arrayOfStrings.push(sampleInput.substring(i));
	}
	return arrayOfStrings;
}
//works not correctly #2
var sampleInput = 'asdf$lskd1234$asdo'
var arrayOfStrings = []
function stringDelimiter (){
//var result = sampleInput.split(delimeter);
for (var i = 0; i < sampleInput.length; i++) {
	arrayOfStrings.push(sampleInput.substring(0 + i, sampleInput.indexOf('$') + i));
	}
	return arrayOfStrings;
}

//works not correctly #3!!!!!!!
var sampleInput = 'asdf$lskd1234$asdo'
var arrayOfStrings = []
var beginPosition = 0
var endPosition = 0
function stringDelimiter (){
//var result = sampleInput.split(delimeter);
for (var i = 0; i <= sampleInput.length; i++ ) {
	if (sampleInput[i] == '$' ){
		endPosition = i
	arrayOfStrings.push(sampleInput.substring(beginPosition, endPosition));
		beginPosition = beginPosition + i +1 ;
	
}
else if (i == sampleInput.length ){
arrayOfStrings.push(sampleInput.substring(sampleInput.lastIndexOf('$')+1, sampleInput.length));
}
}
	return arrayOfStrings;
}


var sampleInput = 'asdf$lskd1234$asdo';
function stringDelimiter (){
//var result = sampleInput.split(delimeter);
for (var i = 0; i < sampleInput.length; i++) {
	var result = sampleInput.substring(sampleInput.indexOf('$'));
return result[i];
}

var sampleInput = 'asdf$lskd1234$asdo';
function stringDelimiter (){
//var result = sampleInput.split(delimeter);
for (var i = sampleInput.indexOf('$'); i != -1 ; i++) {
	var result = []
	result = sampleInput.substring(0,i);
}
return result;
}

var sampleInput = '1234123412341';
function stringDelimiter (){
//var result = sampleInput.split(delimeter);
for (var i = sampleInput.indexOf(1); i < 3 ; i++) {
	i = sampleInput.indexOf(1)
    
}
return i;
}

var sampleInput = '1234123412341';
function stringDelimiter (){
//var result = sampleInput.split(delimeter);
for (var i = 0; i < 3 ; i++) {
	i=sampleInput.indexOf('1')
    
}
return i
}