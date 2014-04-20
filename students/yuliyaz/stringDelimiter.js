
var sampleInput = 'asdf$lskd1234$asdo'
var arrayOfStrings = []
var beginPosition = 0
function stringDelimiter (){
for (var i = 0; i <= sampleInput.length; i++ ) {
	if (sampleInput[i] == '$' ){
		arrayOfStrings.push(sampleInput.substring(beginPosition, i));
		beginPosition = beginPosition + i +1 ;
	
}
	else if (i == sampleInput.length ){
		arrayOfStrings.push(sampleInput.substring(sampleInput.lastIndexOf('$')+1, i));
}
}
return arrayOfStrings;
}


