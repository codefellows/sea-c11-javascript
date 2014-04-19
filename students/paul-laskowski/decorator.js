
function Add(x, y) {
  return x + y; 
}
var counter = counter || 0;
function countDecorator(fn) {
	
	return function (x,y) {
		if (x && y) {
			counter += 1;
			return fn.call (this,x,y);
		} else {
			return counter
		}
	}
}

var addCallCount = countDecorator(Add);
var Add = countDecorator(Add);

