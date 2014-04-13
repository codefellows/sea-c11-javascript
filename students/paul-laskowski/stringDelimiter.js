
function stringDelimiter(inputText, delimiter) {
	var i, indices=[];
	var parsedText=[];
	var start = 0;
	
	//yikes! probably infinite empty strings to parse on.
	if (delimiter) { 
		// get array of delimiter start positions
		while ((i = inputText.indexOf(delimiter,start)) > -1) {
			indices.push(i);
			start = i + delimiter.length;
		}
		// get array of strings (sans delimiter) based on delimiter start positions
		start = 0;
		if (indices) {
			for (i = 0;i < indices.length;i++) {
				parsedText.push(inputText.substring(start,indices[i]));
				start = indices[i] + delimiter.length;
				console.log(start);
			}
		}
	}
	parsedText.push(inputText.substring(start,inputText.length));
	return parsedText;
}