

//shorter if else approach
function preferredName(first,last) {
	if ((first && last) || (!first && !last)) {
		return false;
	} else {
		return (first || last);
	}
}


// //ternary operator approach
// function preferredName(first, last) {
// 	((first && last) || (!first && !last)) ? return false : return (first || last);
// 	return x
// }

