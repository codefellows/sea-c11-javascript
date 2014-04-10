

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
// 	x = ((first && last) || (!first && !last)) ? false : (first || last);
// 	return x
// }

