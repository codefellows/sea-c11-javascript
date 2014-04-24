// Implement a decorator function that takes 
// a function as an argument and will track
// how many times the passed function was called.
 
function Add(x, y) {
  return x + y; 
}

function countDecorator (func){
  var count = 0; 
  function wrapper(){
    count++;
    return func.apply(this, arguments);
  }
  var psw = prompt("Please enter your password.");
  wrapper.callCount = function(psw){
    if (psw === 1234){
    return count;
    }
  };
  return wrapper;
}
 
var Add = countDecorator(Add);
 
Add(1, 1);
// -> 2 Dont pay attention to this number. The important part is we called the `Add` function once.
Add.callCount();
// -> 1
 
Add(2, 2);
// -> 4 Dont pay attention to this number either. The important part is we called the `Add` function again.
Add.callCount();
// -> 2