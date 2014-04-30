var countDecorator = function (func) {
  // sets initial count
  var count = 0;
  // pulls func into wrapper to be returned with count++
  var wrapper = function (){
    count++;
    return func.apply(this, arguments);
  }
  // method to access to the count closure
  wrapper.getCount = function() { return count; };
  return wrapper;
};
