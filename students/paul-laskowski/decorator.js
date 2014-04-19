
function Add(x, y) {
  return x + y; 
}

function countDecorator(fn) {
	if (typeof counter === 'undefined') var counter = 0;
	
	return function () {
		if (arguments.length) {
			counter++;
			return fn.apply (this,arguments);
		} else {
			return counter;
		}
	}
}

var Add = countDecorator(Add);

