// Write a function that takes in a string seperated by a seperator, and will return an array 
// of strings in between the seperators.

var sampleInput = 'asdf$lskd1234$asdo';

var stringDelemiter = function(input, breakPoint){
	var nList = [];
	var limit, temp;
	for (i = 0; i < input.length; i++) {
		limit = input.indexOf(breakPoint);
		if(limit == -1) {
			limit = input.length;
		}
		temp = input.substring(0, limit);
		nList.push(temp);
		input = input.substring(limit + 1);
	}
	return(nList);
} ;
stringDelemiter(sampleInput, '$');
// -> ['asdf', 'lskd1234', 'asdo']