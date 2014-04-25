function countDecorator (fn) {
	var returnValue;
	var count = 0;

	function inner () {
			count++;
			returnValue = fn.apply(this, arguments);
			return returnValue;
		}
		inner.callCount = function () {
			return returnValue;
		};
		return inner;
	}