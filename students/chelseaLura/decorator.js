function countDecorator(fn) {
	var count = 0;
	function decorator () {
		count++;
		return fn.apply(fn, argument);
	}
	decorator.count = function() {
		return count;
	}
	return decorator;
}

add = countDecorator(add);

