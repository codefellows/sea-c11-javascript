function add(x, y) {
	return x + y;
}

function countDecorator(fun) {
	var count = 0;
	function decorator () {
		count++;
		return fun.apply(fun, argument);
	}
	decorator.count = function() {
		return count;
	}
	return decorator;
}

add = countDecorator(add);

