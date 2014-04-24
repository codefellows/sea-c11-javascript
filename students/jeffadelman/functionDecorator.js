
function countDecorator (func){
  var count = 0; 
  var b = 0;
  function wrapper(){
    count++;
    return func.apply(this, arguments);
  }
  wrapper.callCount = function(){
    var psw = prompt('Please enter your password');
    function(psw){
      if(psw===1234){
        console.log(count);
        return count;
      };
  };
  return wrapper;
}