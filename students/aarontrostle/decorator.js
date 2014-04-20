function countDecorator(fn) {
  var count = 0;
  function wrapper() {
    count++;
    return fn.apply(this, arguments)
  }
  wrapper.count = function() {
    return count;
  }
  return wrapper;
}
