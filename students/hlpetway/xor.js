function preferredName (first, last) {
       if ((first && last) || (!first && !last)) {
            return false;
       } else {
		   return (first || last);
}
}