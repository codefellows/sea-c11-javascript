
function countDecorator (func){
  var count = 0; 
  function wrapper(){
    count++;
    return func.apply(this, arguments);
  }
  wrapper.callCount = function(){
      return count;
  };
  return wrapper;
}