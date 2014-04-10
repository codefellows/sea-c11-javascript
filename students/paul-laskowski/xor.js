

//if else approach
function preferredName(first,last) {
	if (!!first == !!last) {
		return false;
	} else {
		return (first || last);
	}
}


// //ternary operator approach
// function preferredName(first,last) {
// 	return = (!!first == !!last) ? false : (first || last);
// }

