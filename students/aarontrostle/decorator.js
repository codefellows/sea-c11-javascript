function countDecorator(fn) {
  var count = 0;
  function wrapper() {
    count++;
    return fn.apply(this, arguments)
  }
  wrapper.callCount = function() {
    return count;
  }
  return wrapper;
}
