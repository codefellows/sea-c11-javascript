
function stringDelimiter(inputText, delimiter){
	var i;
	var parsedText=[];
	
	if (!delimiter) {
		parsedText.push(inputText);
		
	} else{
		while(inputText){
		
			i = inputText.indexOf(delimiter);
		
			if (i == -1) i = inputText.length;
		
			parsedText.push(inputText.substring(0,i));
		
			inputText = inputText.substring(i + delimiter.length);
		
		}
	}
	return parsedText;
}
