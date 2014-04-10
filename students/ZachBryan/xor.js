var preferredName = function(first, last) {
	return ((!first && !last) || (first && last) ? false : (first || last));
}