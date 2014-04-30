// Counter Decorator
function countDecorator (add){
  var count = 0;
  
  function wrapper(){
    count += 1;
    return add.apply(this, arguments);
  }
  
  wrapper.callCount = function(){
    return count;
  };
  return wrapper;
}