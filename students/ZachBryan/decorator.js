function countDecorator(fn){
 var count = 0;
   function counter(){
     count++;
     return fn.call(null, arguments);
  }
  counter.callCount = function(){
    return count;
  };
  return counter;
}