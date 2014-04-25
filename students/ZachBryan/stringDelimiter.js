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